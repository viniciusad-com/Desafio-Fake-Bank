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

  signInForm!: FormGroup;
  isLoading: boolean = true;
  isError: boolean = false;
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
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
    if (this.signInForm.invalid) {
      this.validateAllForms();
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
   } 

  

}
