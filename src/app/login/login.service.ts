import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Login } from '../login.interface';
import { Sessao } from '../sessao.interface';
import { AuthService } from '../shared/services/auth/auth.service';
import { Usuario } from '../usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  FAKE_BANK_API_URL = environment.FAKE_BANK_API_URL;
  
  constructor(
    private http: HttpClient,
    private auth: AuthService) { }


    
    logged(login: Login) {
      return this.http.post<Sessao>(this.FAKE_BANK_API_URL + '/login', login);
    }

    signIn(usuario: Usuario) {
      return this.http.post(this.FAKE_BANK_API_URL + '/usuarios', usuario);
    }
    
}
