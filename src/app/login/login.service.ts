import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AuthService } from '../shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  LOGIN_API_URL = environment.LOGIN_API_URL
  
  constructor(
    private http: HttpClient,
    private auth: AuthService) { }

  // checkLogin() {

  //   .pipe(
  //     tap(response => { this.auth.setUser(response.token) })
  //   )
  //   return of({})
  //   //  return this.http.post<Country[]>(this.LOGIN_API_URL)
  // }
}
