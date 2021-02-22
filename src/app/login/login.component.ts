import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  isError: boolean = false;
  email!: string;
  password!: string;

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }


  onSubmit(form: any) {
    if (!form.Valid) {
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();
      return;
    }
  }

  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

  /*  checkLogin() {
     this.isLoading = true;
     this.isError = false;

     this.loginService.checkLogin()
     .pipe(
       take(1),
       finalize( () => this.isLoading = false )
     ).subscribe(
         response => { this.onSuccess(response) },
         error => { this.onError(error) }
       )
   }

   onSuccess(response: any[]) {
     this.isError = false;
     this.countryList = response;

     this.router.navigate(['home']);
   }

   onError(error: any) {
     this.isError = true;
     console.log(error);
   } */


}
