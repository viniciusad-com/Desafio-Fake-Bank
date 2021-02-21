import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Contato } from './contato.interfaces';
import { ContatoService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos: Contato[];
  page = 1;
  isloading: boolean;
  erroNoCarregamento: boolean;


  constructor(
    private contatoService: ContatoService
  ) {

  }

  ngOnInit() {
    this.carregarContatos();
  }

  carregarContatos() {
    this.isloading = true;
    this.erroNoCarregamento = false;

    this.contatoService.getContatos(this.page)
      .pipe(
        take(1),
        finalize(()=>{
          this.isloading = false;
        })
      )
      .subscribe(
        (success) => {
        this.onSuccess(success);
      }, 
      (error) => {
        this.onError(error)
      });
  }

  paginaAnterior(){
    this.page--;
    this.carregarContatos();
  }

  proximaPagina(){
    this.page++;
    this.carregarContatos();
  }

  onSuccess(success: Contato[]){
    this.contatos = success;
  }

  onError(error: any){
    this.erroNoCarregamento = true;
    console.error(error);
  }
}
