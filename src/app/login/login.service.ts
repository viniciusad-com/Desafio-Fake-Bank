import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { AuthService } from './../shared/services/auth/auth.service';
import { LoginResponse } from './login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
  ) { }

  logar(email: string, senha: string): Observable<LoginResponse> {
    /* return this.http.post(`${this.API_URL}/auth`, {contato, this.httpoptions}) */
    if (email === 'melo.wesley53@gmail.com' && senha === '123') {
      return of({
        usuario: {
          nome: 'Wesley',
          sobrenome: 'Melo',
          email: 'melo.wesley53@gmail.com',
        },
        token: 'fea79d1eb154758239cc1fa740a7575999be856b2fc2a2ca3a542a0496131073',
      }).pipe(
        delay(5000),
        tap(response => {
            this.authService.setUsuario(response.usuario);
            this.authService.setToken(response.token);
        })
      );
    }
    return throwError('Usuário ou senha incorreto.');
  }
}
