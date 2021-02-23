import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/login.interface';
import { Usuario } from 'src/app/usuario.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  usuario: any;

  FAKE_BANK_API_URL = environment.FAKE_BANK_API_URL;

  login: Login = {
    senha: '123456',
    usuario: 'helloWorld',
  }

  fixeds = {
    senha: '',
    usuario: '',
  } ;
  
  constructor(
    private httpClient: HttpClient,
  ) { }


  setUser(usuario: Usuario) {
    this.usuario = usuario;
    localStorage.setItem('token', JSON.stringify(''));
  }

  getUser() {
    if (this.usuario) {
      return this.usuario;
    }
        
    const loggedUser = localStorage.getItem('token');
    if (loggedUser) {
      this.token = JSON.parse(loggedUser);
      return this.token;
    }

    return null;
  }

  getToken() {
    if(this.token) {
      return this.token;
    }

    const savedToken = localStorage.getItem('token');
    if(savedToken) {
      this.token = savedToken;
      return this.token;
    }

    return null;
  }

  estaLogado(): boolean {
    //return this.getUsuario() && this.getToken.Token() ? true : false;
    if (this.getUser() && this.getToken()) {
      return true;
    }
    return false;
  }

  postLogin(login: Login) {
    return this.httpClient.post<Login>(this.FAKE_BANK_API_URL + '/login', login);
  }
 
}