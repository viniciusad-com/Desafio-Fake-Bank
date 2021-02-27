import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { Usuario } from './../models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  FAKE_BANK_API_URL = environment.FAKE_BANK_API_URL;

  constructor(
    private http: HttpClient,
  ) { }

  signIn(usuario: Usuario) {
    return this.http.post(this.FAKE_BANK_API_URL + '/usuarios', usuario);
  }
}
