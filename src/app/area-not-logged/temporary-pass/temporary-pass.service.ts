import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { NovaSenha } from '../../models/novasenha.interface';

@Injectable({
  providedIn: 'root'
})
export class TemporaryPassService {

  FAKE_BANK_API_URL = environment.FAKE_BANK_API_URL;

  constructor(
    private http: HttpClient,
  ) { }


  temporaryPass(novaSenha: NovaSenha) {
    return this.http.post<any>(this.FAKE_BANK_API_URL + '/nova-senha', novaSenha);
  }

}
