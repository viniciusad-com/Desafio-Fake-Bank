import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Sessao } from '../sessao.interface';
import { AuthService } from '../shared/services/auth/auth.service';
import { RecoveryPassService } from './recovery-pass.service';

@Component({
  selector: 'app-recovery-pass',
  templateUrl: './recovery-pass.component.html',
  styleUrls: ['./recovery-pass.component.scss']
})
export class RecoveryPassComponent implements OnInit {

  isLoading: boolean = false;
  isError: boolean = false;

  recoveryForm!: FormGroup;

  sessao!: Sessao;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private recoveryPassService: RecoveryPassService,
  ) { }


  ngOnInit(): void {
    this.initializeForm();
  }

  validateAllForms() {
    Object.keys(this.recoveryForm.controls).forEach(fields => {
      const control = this.recoveryForm.get(fields)

      control?.markAllAsTouched();
    })
  }

  onSubmit() {
    if (this.recoveryForm.invalid) {
      this.validateAllForms();
      return;
    }

    this.checkLogin();
  }


  initializeForm() {
    this.recoveryForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
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
     console.log(error);
   } 

  checkLogin() {
    this.isLoading = true;
    this.isError = false;
    this.recoveryPassService.recovery(this.recoveryForm.value)
      .pipe(
        take(1),
        finalize(() => this.isLoading = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
  }
}
