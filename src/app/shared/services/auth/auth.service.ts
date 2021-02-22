import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
      return this.token;
    }

    return null;
  }
 
}