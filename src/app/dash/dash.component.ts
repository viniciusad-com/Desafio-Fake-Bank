import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Dashboard } from '../models/dashboard.interface';
import { Sessao } from '../models/sessao.interface';
import { AuthService } from '../shared/services/auth/auth.service';
import { ContaDto } from './../models/contaDto.interface';
import { DashService } from './dash.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  dashboard !: Dashboard;
  session !: Sessao;

  isLoading: boolean = true;
  isError: boolean = false;

  showValues = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private dashService: DashService,
  ) { }

  ngOnInit(): void {

    this.validateCredentials();
    this.checkDashboard();
  }

  validateCredentials() {
    const sessionLocale = this.auth.getSession();
    if (sessionLocale) {
      this.session = sessionLocale
      return;
    }

    this.router.navigate(['login'])
    return;
  }

  checkDashboard() {
    this.isLoading = true;
    this.isError = false;
    this.dashService.getDash(this.session)
      .pipe(
        take(1),
        finalize(() => this.isLoading = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
  }

  onSuccess(response: any) {
    this.dashboard = response;
  }

  onError(error: any) {
    console.log(error)
  }

  countBankValue(contaDto: ContaDto) {
    if (!contaDto.lancamentos) {
      return 0;
    } else {
      let valueLancamento: number = 0;
      for (let lancamento of contaDto.lancamentos) {
        valueLancamento += lancamento.valor;
      }
      return valueLancamento;
    }
  }

  onShowValues() {
    this.showValues = !this.showValues;
  }

  onLogout() {
    this.auth.logout();
  }
}
