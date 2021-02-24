import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/usuario.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  FAKE_BANK_API_URL = environment.FAKE_BANK_API_URL;

  user!: Usuario;
  token!: string;

  
  constructor(
    private http: HttpClient, 
    private router: Router) { }



  setUser(user: Usuario) {
    this.user = user
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  
  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
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