import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { AuthService } from '../../shared/services/auth/auth.service';
import { AlteraSenha } from './../../models/alteraSenha.interface';

@Injectable({
  providedIn: 'root'
})
export class RecoveryPassService {

  FAKE_BANK_API_URL = environment.FAKE_BANK_API_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }


  recoveryPass(alteraSenha: AlteraSenha) {
    let params = new HttpParams();
    params = params.append('senhaTemporaria', this.authService.temporaryPass);
    return this.http.post<AlteraSenha>(this.FAKE_BANK_API_URL + '/altera-senha?', alteraSenha, {params});
  }
}
