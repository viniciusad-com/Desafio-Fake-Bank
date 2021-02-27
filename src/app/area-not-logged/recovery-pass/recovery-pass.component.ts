import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { AlertService } from '../../shared/services/alert/alert.service';
import { AuthService } from '../../shared/services/auth/auth.service';
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

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private recoveryPassService: RecoveryPassService,
    private alertService: AlertService,
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

    this.checkRecoveryPass();
    alert("Senha alterada com sucesso.")
    this.router.navigate(['login']);
  }

  initializeForm() {
    this.recoveryForm = this.formBuilder.group({
      senha: ['', Validators.required],
      usuario: ['', Validators.required]
    })
  }
  
  onSuccess(response: any) {
    console.log(response)
    this.isError = false;
   }

  onError(error: any) {
    this.isError = true;
    console.log(error);
    this.alertService.error('', error.error.error)
  } 

  checkRecoveryPass() {
    this.isLoading = true;
    this.isError = false;
    this.recoveryPassService.recoveryPass(this.recoveryForm.value)
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
