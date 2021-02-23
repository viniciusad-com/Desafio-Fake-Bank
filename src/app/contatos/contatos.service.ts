import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Contato } from './contato.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) { }

  getContatos(page: number) {
    return this.http.get<Contato[]>(`${this.API_URL}/contatos`, {
      params: {
        _page: String(page),
      }
    });
  }
}
