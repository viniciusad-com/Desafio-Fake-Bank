import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private authService: AuthService,
  ) { }

  register(cpf: string, login:string, nome: string, senha: string) {
    
  }
}
