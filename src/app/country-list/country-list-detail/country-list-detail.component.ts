import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Country } from '../country-list.inferfaces';
import { CountryListService } from '../country-list.service';

@Component({
  selector: 'app-country-list-detail',
  templateUrl: './country-list-detail.component.html',
  styleUrls: ['./country-list-detail.component.scss']
})

export class CountryListDetailComponent implements OnInit {

  countryName: string | undefined | null = "";
  countryList: Country[] = [];
  country!: Country;

  isLoading: boolean = false;
  isError: boolean = false;


  constructor(
    private countryListService: CountryListService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.loadList()
  }


  loadList() {
    this.countryName = this.route.snapshot.paramMap.get('country')
    

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

      this.checkCountryList(this.countryList)

  }

  onError(error: any) {
      this.isError = true;
      console.log(error);
  }


  checkCountryList(countryList: Country[]) {
    for (let country of countryList) {
      if (country.country === this.countryName) {
        this.country = country;
        
        this.country.country = country.country
        this.country.infected = !isNaN(country.infected) ? country.infected : 0;
        this.country.tested = !isNaN(country.tested) ? country.tested : 0;
        this.country.recovered = !isNaN(country.recovered) ? country.recovered : 0;
        this.country.deceased = !isNaN(country.deceased) ? country.deceased : 0;

      }
      
    }
    return
  }

  onGoBack() {
    this.router.navigate(['home/']) 
  }
  
}
