import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  signInError!: string;
  signInForm!: FormGroup;
  isLoading: boolean = true;
  isError: boolean = false;
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSignIn() {
    this.router.navigate(['login']);
  }

  validateAllForms() {
    Object.keys(this.signInForm.controls).forEach(fields => {
      const control = this.signInForm.get(fields)

      control?.markAllAsTouched();
    })
  }

  onSubmit() {
    this.validateAllForms();
    console.log(this.signInForm)

    if (this.signInForm.invalid) {
      
      return;
    }

    this.checkSignUp();
  }
  
  initializeForm() {
    this.signInForm = this.formBuilder.group({
      cpf: ['', Validators.required],
      login: ['', Validators.required],
      nome: ['', Validators.required],
      senha: ['', Validators.required],
      confirmacao: ['', Validators.required],
    })
  }


  checkSignUp() {
    this.isLoading = true;
    this.isError = false;
    this.loginService.signIn(this.signInForm.value)
      .pipe(
        take(1),
        finalize(() => this.isLoading = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
  }

  onSuccess(response: any) {
    console.log(response)
     this.isError = false;
     
     this.router.navigate(['dashboard']);
   }

    onError(error: any) {
     this.isError = true;
     console.log(error);
     console.log(error.error);

     this.signInError = error.error.error
     console.log(this.signInError);
   } 
}
