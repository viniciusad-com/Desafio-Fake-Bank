import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Sessao } from 'src/app/models/sessao.interface';
import { environment } from 'src/environments/environment';

import { Login } from './../../../models/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  FAKE_BANK_API_URL = environment.FAKE_BANK_API_URL;

  login!: Login;
  token!: string;
  session!: Sessao;
  public temporaryPass!: string;

  constructor(
    private http: HttpClient, 
    private router: Router) { }

    setLogin(login: Login) {
      this.login = login
      localStorage.setItem('login', JSON.stringify(login));
    }

    isLogged() {
      return this.getLogin() && this.getToken ? true : false;
    }
  
    getLogin() {
      if (this.login) {
        return this.login;
      }
      
      const loginLocale = localStorage.getItem('login')
      if (loginLocale) {
        this.login = JSON.parse(loginLocale);
        return this.login;
      }
  
      return  {
        senha: '',
        usuario: '',
      };
    }
 
    setSession(session: Sessao) {
      this.session = session
      localStorage.setItem('session', JSON.stringify(session));
    }

    getSession() {
      if (this.session) {
        return this.session;
      }
    
      const sessionLocale = localStorage.getItem('session')
      if (sessionLocale) {
        this.session = JSON.parse(sessionLocale);
        return this.session;
      }

      return null;
    }
    
    setToken(token: string) {
      this.token = token;
      localStorage.setItem('token', token);
    }

    getToken() {
      if (this.token) {
        return this.token;
      }
    
      const tokenLocale = localStorage.getItem('token')
      if (tokenLocale) {
        this.token = tokenLocale;
        return this.token;
      }

      return null;
    }

    setTemporaryPass(temporaryPass: string) {
      this.temporaryPass = temporaryPass;
      localStorage.setItem('senhaTemporaria', temporaryPass)
    }

    getTemporaryPass() {
      if(this.temporaryPass) {
        return this.temporaryPass;
      }

      const temporaryPassLocale = localStorage.getItem('senhaTemporaria')
      if(temporaryPassLocale) {
        this.temporaryPass = temporaryPassLocale;
        return this.temporaryPass
      }

      return null;
    }
 

  logout() {
    const x = null as any;
    this.login = x;
    this.token = x;
    localStorage.clear();
    this.router.navigate(['home']);
  }
}