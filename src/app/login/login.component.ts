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

<<<<<<< HEAD
  isLoading: boolean = false;
  isError: boolean = false;
  email!: string;
  password!: string;

  constructor(
    private router: Router,
    private loginService: LoginService,
=======
  email: string;
  password: string;


  constructor(
    private loginService: LoginService,
    private router: Router,
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
  ) { }

  ngOnInit(): void {
  }

<<<<<<< HEAD

  onSubmit(form: any) {
    if (!form.Valid) {
=======
  onSubmit(form: NgForm) {
    if (!form.valid) {
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();
      return;
    }
<<<<<<< HEAD
=======
    this.login();

  }

  login() {
    this.loginService.logar(this.email, this.password)
      .subscribe((success) => {
        this.router.navigate(['home'])
      }, (error) => {
        console.log(error);
      })
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
  }

  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }
<<<<<<< HEAD

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


=======
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
}
