import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';
import { Sessao } from 'src/app/models/sessao.interface';

import { AuthService } from '../shared/services/auth/auth.service';
import { Login } from './../models/login.interface';
import { AlertService } from './../shared/services/alert/alert.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  isError: boolean = false;
  login: Login = {
    senha: '',
    usuario: '',
  };

  loginForm!: FormGroup;

  sessao!: Sessao;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private http: HttpClient,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.checkLoginInitial();
    this.initializeForm();
    this.checkLoginFinal();
  }

  validateAllForms() {
    Object.keys(this.loginForm.controls).forEach(fields => {
      const control = this.loginForm.get(fields)

      control?.markAllAsTouched();
    })
  }

  checkLoginInitial() {
    if (this.authService.getLogin()) {
      this.login = this.authService.getLogin()
    }
  }

  checkLoginFinal() {
    if (this.loginForm) {
      this.onSubmit();
    }
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.validateAllForms();
      return;
    }

    this.checkLogin();
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      usuario: [this.login.usuario, Validators.required],
      senha: [this.login.senha, Validators.required]
    })
  }

  onSuccess(response: Sessao) {
    console.log(response)
    this.authService.setSession(response)
    this.authService.setToken(response.token)
    this.isError = false;

    this.router.navigate(['dashboard']);
  }

  onError(error: any) {
    this.isError = true;
    this.alertService.error('', error.error.error)
  }

  checkLogin() {
    this.isLoading = true;
    this.isError = false;
    this.loginService.logged(this.loginForm.value)
      .pipe(
        take(1),
        finalize(() => this.isLoading = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
  }

  onRecoveryPass() {
    this.router.navigate(['temporary-pass']);
  }

  onSignUp() {
    this.router.navigate(['home']);
  }
}
