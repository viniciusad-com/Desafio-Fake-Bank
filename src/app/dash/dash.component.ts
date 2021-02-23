import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { ContaDto } from '../contaDto.interface';
import { Dashboard } from '../dashboard.interface';
import { DashService } from './dash.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {


  dashboardlist: Dashboard[] = [];
  dashboard?: any;
  contaBanco?: ContaDto;
  contaCredito?: ContaDto;
  saldo?: number;



  transacoesValue ?: number;
  
    

  constructor(private dashService: DashService) { }

  ngOnInit(): void {
    this.initialDashboard();
    
  }
  
  initialDashboard() {
    this.dashService.getDashboard()
    .pipe(
      take(1),
    ).subscribe(
        (response) => { this.onSuccess(response) },
        (error) => { this.onError(error) }
      )
     
  }


  onSuccess(response: Dashboard) {


    this.dashboard = response
    //this.contaBanco = response.contaBanco
    this.saldo = response.contaBanco.saldo

    console.log(this.contaBanco)
    console.log(response)
  }

  onError(error: any) {
      console.log(error);
  }

}
