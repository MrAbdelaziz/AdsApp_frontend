import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem("role") !== "ROLE_ADMIN") {
      this.router.navigate(['ads']);
      return false;
    }
    return true;
  }

}
