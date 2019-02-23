import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false;

  constructor(private router: Router) {
  }

  public isAuthenticated(): boolean {
    return this.isAuth;
  }

  public login(): void {
    this.isAuth = true;
    this.router.navigate(['/']);
  }
}
