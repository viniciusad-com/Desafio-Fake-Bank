
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AuthService } from './../shared/services/auth/auth.service';
import { LoginResponse } from '../loginResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
  ) { }

  logar(usuario: string, senha: string): Observable<LoginResponse> {
    /* return this.http.post(`${this.API_URL}/auth`, {contato, this.httpoptions}) */
    if (usuario === 'helloWorld' && senha === '123456') {
      return of({
        usuario: {
          id: 393,
          cpf: "11255647898",
          nome: 'Hello World',
          login: "helloWorld",
          senha: "123456",
          senhaTemporaria: null,
          redefinirSenha: false
        },
        conta: {
          id: 761,
          numero: "helloWorld",
          saldo: 0.0,
          tipo: "CC",
          descricao: "CONTA CREDITO"
        },
        contaCredito: {
          id: 760,
          numero: "helloWorld",
          saldo: 2700.0,
          tipo: "CB",
          descricao: "CONTA BANCO"
        },
        token: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoZWxsb1dvcmxkIiwiaWRVc3VhcmlvIjozOTMsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE2MTQwOTY3MjIsImV4cCI6MTYxNDEwMDMyMn0.TMna755wZXM8urD19iAhRdN6i063GwEtno5iNwvKUuovy3xG7393daVxPxB_0upYxrWodbnwPstMCkqwSbNDAA',
        dataInicio: "2021-02-23T16:12:02.692+00:00",
        dataFim: "2021-02-23T17:12:02.692+00:00"
      }).pipe(
        delay(2000),
        tap(response => {
            this.authService.setUser(response.usuario);
            this.authService.setToken(response.token);
        })
      );
    }
    return throwError('Usuário ou senha incorretos.');
  }
}
