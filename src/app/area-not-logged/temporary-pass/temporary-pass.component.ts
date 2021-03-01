import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Sessao } from '../../models/sessao.interface';
import { AlertService } from '../../shared/services/alert/alert.service';
import { AuthService } from '../../shared/services/auth/auth.service';
import { TemporaryPassService } from './temporary-pass.service';

@Component({
  selector: 'app-temporary-pass',
  templateUrl: './temporary-pass.component.html',
  styleUrls: ['./temporary-pass.component.scss']
})
export class TemporaryPassComponent implements OnInit {

  isLoading: boolean = false;
  isError: boolean = false;

  temporaryForm!: FormGroup;
  sessao!: Sessao;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private temporaryPassService: TemporaryPassService,
    private alertService: AlertService,
  ) { }


  ngOnInit(): void {
    this.initializeForm();
  }

  validateAllForms() {
    Object.keys(this.temporaryForm.controls).forEach(fields => {
      const control = this.temporaryForm.get(fields)

      control?.markAllAsTouched();
    })
  }

  onSubmit() {
    if (this.temporaryForm.invalid) {
      this.validateAllForms();
      return;
    }

    this.checkTemporaryPass();
  }

  initializeForm() {
    this.temporaryForm = this.formBuilder.group({
      email: ['', Validators.required],
      login: ['', Validators.required]
    })
  }

  onSuccess(response: any) {
    this.authService.setTemporaryPass(response);
 
    this.isError = false;
    
    this.router.navigate(['recovery-pass']);
   }

  onError(error: any) {
    this.isError = true;
    this.alertService.error('', error.error.error)
  } 

  checkTemporaryPass() {
    this.isLoading = true;
    this.isError = false;
    this.temporaryPassService.temporaryPass(this.temporaryForm.value)
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
