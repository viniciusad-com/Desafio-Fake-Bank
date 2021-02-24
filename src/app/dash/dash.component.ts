import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Dashboard } from '../dashboard.interface';
import { Sessao } from '../sessao.interface';
import { AuthService } from '../shared/services/auth/auth.service';
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

  onSuccess(response: Dashboard) {
    this.dashboard = response;
  }

  
  onError(error: any) {
    console.log(error)
  }
}
