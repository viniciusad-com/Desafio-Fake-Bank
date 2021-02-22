import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Country } from './country-list.inferfaces';
import { CountryListService } from './country-list.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countryList: Country[] = [];
  isLoading: boolean = false;
  isError: boolean = false;



  constructor(
    private countryListService: CountryListService,
    private router: Router, 
    ) { }

  ngOnInit(): void {
    this.loadList()
      
  }


  loadList() {
    this.isLoading = true;
    this.isError = false;

    this.countryListService.getCountryList()
    .pipe(
      take(1),
      finalize( () => this.isLoading = false )
    ).subscribe(
        (response) => { this.onSuccess(response) },
        (error) => { this.onError(error) }
      )
  }

  onSuccess(response: Country[]) {
      this.isError = false;
      this.countryList = response;
  }

  onError(error: any) {
      this.isError = true;
      console.log(error);
  }

  onCountryListDetails(country: Country) {
    this.router.navigate(['home/' + country.country]) 
  }
}


