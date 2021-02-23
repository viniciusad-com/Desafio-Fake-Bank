import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/internal/operators/take';
import { Login } from '../login.interface';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  login: Login = {
    senha: '123456',
    usuario: 'helloWorld',
  }

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.initialLogin();
 }
  initialLogin() {
    this.auth.postLogin(this.login)
    .pipe(
      take(1),
    ).subscribe(
        (response) => { this.onSuccess(response) },
        (error) => { this.onError(error) }
      )
  }
  onSuccess(response: any) {
    console.log(response)
  }
  onError(error: any) {
      console.log(error);
  }

}
