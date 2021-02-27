import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Login } from '../models/login.interface';
import { Sessao } from '../models/sessao.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  FAKE_BANK_API_URL = environment.FAKE_BANK_API_URL;
  
  constructor(
    private http: HttpClient,
  ) { }

  logged(login: Login) {
    return this.http.post<Sessao>(this.FAKE_BANK_API_URL + '/login', login);
  }
}
