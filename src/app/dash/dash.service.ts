import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Dashboard } from '../dashboard.interface';
import { Sessao } from '../sessao.interface';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  FAKE_BANK_API_URL = environment.FAKE_BANK_API_URL;

  constructor(
    private http: HttpClient,
    ) { }


    getDash(session: Sessao) {

      let headers = new HttpHeaders();
      headers = headers.append('Authorization', session.token);
      
      let params = new HttpParams();
      params = params.append('fim', session.dataFim);
      params = params.append('inicio', session.dataInicio);
      params = params.append('login', session.usuario.login);
      
      
      return this.http.get<Dashboard>(this.FAKE_BANK_API_URL + '/dashboard', {headers, params});
    }



}
