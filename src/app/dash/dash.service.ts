import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Dashboard } from '../dashboard.interface';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  FAKE_BANK_API_URL = environment.FAKE_BANK_API_URL

  login = 'helloWorld'
  senha = '123456'
  token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoZWxsb1dvcmxkIiwiaWRVc3VhcmlvIjozOTMsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE2MTQwMzc5MTIsImV4cCI6MTYxNDA0MTUxMn0.S3fdlMBAHwmCI-QKaqyweJsCJb76qDv43rn684nTx3ZvevzU4BqC8-YTs9iXcf491jsDwCuBWcfdkkDzgxZ1Uw'

  fim = '2021-02-22'
  inicio = '2021-02-22'

  constructor(private http: HttpClient) { }


  getDashboard() {
    
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', this.token);
    
    let params = new HttpParams();
    params = params.append('fim', this.fim);
    params = params.append('inicio', this.inicio);
    params = params.append('login', this.login);


    


    return this.http.get<Dashboard>(this.FAKE_BANK_API_URL + '/dashboard', {headers, params})
  }


}
