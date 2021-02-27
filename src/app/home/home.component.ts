import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Login } from './../login.interface';
import { AlertService } from './../shared/services/alert/alert.service';
import { AuthService } from './../shared/services/auth/auth.service';
import { HomeService } from './home.service';

import { HomeValidators } from './home-validators';

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
  login!: Login;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private alertService: AlertService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  goToLogin() {
    this.router.navigate(["login"]);
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
      cpf: ['', Validators.compose([Validators.required,HomeValidators.CPFValidator])],
      login: ['', Validators.required],
      nome: ['', Validators.required],
      senha: ['', Validators.required],
      confirmacao: ['', Validators.required],
    }, 
    {
      Validators: HomeValidators.matchPassword,
    })
  }

  checkSignUp() {
    this.isLoading = true;
    this.isError = false;
    this.login = {
      senha: this.signInForm.value.senha,
      usuario: this.signInForm.value.login

    }
    console.log(this.signInForm)
    this.homeService.signIn(this.signInForm.value)
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
    this.authService.setLogin(this.login);

    this.router.navigate(['dashboard']);
  }

  onError(error: any) {
    this.isError = true;

    this.signInError = error.error.error
    this.alertService.error('', this.signInError = error.error.error)
  }
}
