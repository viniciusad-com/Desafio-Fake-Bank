import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { AlteraSenha } from '../../models/alteraSenha.interface';
import { AlteraSenhaResponse } from '../../models/alteraSenhaResponse.interface';
import { AuthService } from '../../shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecoveryPassService {

  FAKE_BANK_API_URL = environment.FAKE_BANK_API_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }


  recoveryPass(senhaTemporaria: AlteraSenhaResponse) {
    
    let params = new HttpParams();
    params = params.append('senhaTemporaria', senhaTemporaria.senhaTemporaria);

    return this.http.post<AlteraSenha>(this.FAKE_BANK_API_URL + '/altera-senha', {params});
  }
}
