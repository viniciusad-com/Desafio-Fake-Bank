import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes: Transacao[];
  isloading: boolean;
  erroNoCarregamento: boolean;
  page = 1;

  constructor(
    private extratoService: ExtratoService
  ) {
  }

  ngOnInit() {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.isloading = true;
    this.erroNoCarregamento = false;

    this.extratoService.getTransacoes(this.page)
      .pipe(
        take(1),
        finalize(() => {
          this.isloading = false;
        })
      )
      .subscribe(
        (success) => {
          this.onSuccess(success);
        },
        (error) => {
          this.onError(error);
        });
  }

  onSuccess(success: Transacao[]) {
    this.transacoes = success;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  paginaAnterior() {
    this.page--;
    this.carregarExtrato();
  }

  proximaPagina() {
    this.page++;
    this.carregarExtrato();
  }

}
