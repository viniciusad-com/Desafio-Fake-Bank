import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Sessao } from 'src/app/sessao.interface';
import { Usuario } from 'src/app/usuario.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  FAKE_BANK_API_URL = environment.FAKE_BANK_API_URL;

  user!: Usuario;
  token!: string;
  session!: Sessao;

  
  constructor(
    private http: HttpClient, 
    private router: Router) { }


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
    
  setUser(user: Usuario) {
    this.user = user
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  getUser() {
    if (this.user) {
      return this.user;
    }
    
    const userLocale = localStorage.getItem('user')
    if (userLocale) {
      this.user = JSON.parse(userLocale);
      return this.user;
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


  isLogged() {
    return this.getUser() && this.getToken ? true : false;
  }

  logout() {
    const y: string = null as any;
    const x: Usuario = null as any;
    this.user = x;
    this.token = y;
    localStorage.clear();
    this.router.navigate(['login']);
  }





  

 
}