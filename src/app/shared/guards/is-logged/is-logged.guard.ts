import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }


  canActivate(): boolean {
    if (this.authService.isLogged()) {
      return true;
    }
    this.router.navigate(['home']);
    return false;
  }

}
