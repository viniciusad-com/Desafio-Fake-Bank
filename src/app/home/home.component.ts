import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  registerForm: FormGroup;
 
  isLoading: boolean;
  registerError: boolean

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      cpf: [""],
      nomeUsuario: [""],
      nome: [""],
      senha: [""],
      confirmarSenha: [""]
    })
  }

  registerUser() {
    console.log(this.registerForm);
  }
}