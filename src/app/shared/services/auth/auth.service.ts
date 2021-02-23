import { Injectable } from '@angular/core';

<<<<<<< HEAD
=======
import { Usuario } from './../../interfaces/usuario.interface';

>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
@Injectable({
  providedIn: 'root'
})
export class AuthService {

<<<<<<< HEAD
  token: any;
  
  constructor() { }


  setUser(usuario: any) {
    localStorage.setItem('token', JSON.stringify(''));
  }

  getUser() {
    if (this.token) {
      return this.token;
    }
    
    const loggedUser = localStorage.getItem('token');
    if (loggedUser) {
      this.token = JSON.parse(loggedUser);
=======
  usuario: Usuario;
  token: string;

  constructor() { }

  setUsuario(usuario: Usuario) {
    this.usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUsuario() {
    if (this.usuario) {
      return this.usuario;
    }

    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      this.usuario = JSON.parse(usuarioGuardado);
      return this.usuario;
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

    const tokenGuardado = localStorage.getItem('token');
    if (tokenGuardado) {
      this.token = tokenGuardado;
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
      return this.token;
    }

    return null;
  }
<<<<<<< HEAD
 
}
=======

  estaLogado(): boolean {
    return this.getUsuario() && this.getToken() ? true : false;
  }
}
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
