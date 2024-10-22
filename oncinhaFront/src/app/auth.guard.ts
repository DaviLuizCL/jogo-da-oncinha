import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './service/auth.service'; // O serviço de autenticação
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean | Observable<boolean> {
    if (this.authService.isLoggedIn()) {
      return true; 
    } else {
      this.router.navigate(['/auth']); 
      return false;
    }
  }
}
