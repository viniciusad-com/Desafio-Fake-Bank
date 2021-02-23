import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
=======
import { AuthService } from './../shared/services/auth/auth.service';

>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

}
=======
  usuario: any;
  
  constructor(
    private authService: AuthService,
  ){

  }
  ngOnInit() {
    this.usuario = this.authService.getUsuario();
  }
}
>>>>>>> 9b92f9701c05f28fe5e8d2ecce23d924783b6a8c
