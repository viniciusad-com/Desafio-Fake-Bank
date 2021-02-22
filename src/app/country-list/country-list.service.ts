import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Country } from './country-list.inferfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryListService {

  COVID_API_ULR = environment.COVID_API_URL

  constructor( private http: HttpClient ) { }

  getCountryList() {
    return this.http.get<Country[]>(this.COVID_API_ULR)
  }



}
