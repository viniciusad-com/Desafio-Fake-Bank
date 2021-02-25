import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { Login } from './../login.interface';

@Injectable({
  providedIn: 'root'
})
export class RecoveryPassService {

  FAKE_BANK_API_URL = environment.FAKE_BANK_API_URL;

  constructor(
    private http: HttpClient,
  ) { }


  recovery(login: Login) {
    return this.http.post<any>(this.FAKE_BANK_API_URL + '/nova-senha', login);
  }

}
