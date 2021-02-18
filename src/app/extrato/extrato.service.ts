import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  constructor() { }

  getTransacoes(){
    return [
      {
        id:1,
        name: 'Jaleco',
        description:'Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes',
        price:'R$ 999,99',
        available:true,
     },
     {
        id:2,
        name:'Avental',
        description:'Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes',
        price:'R$ 999,99',
        available:true,
     },
     {
        id:3,
        name:'Touca',
        description:'Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes',
        price:'R$ 999,99',
        available:true,
     },
    ];
  }
}
