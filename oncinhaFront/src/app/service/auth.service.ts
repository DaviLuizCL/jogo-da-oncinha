import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) { }
  router = inject(Router);

  register(data: User): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/register", data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response' 
    }).pipe(
      map(response => response.body),
      catchError(this.handleError)
    );
  }

  login(data: User): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/login", data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      tap(response => {
        localStorage.setItem('authToken', response.token);
      }),
      catchError(this.handleError) 
    );
  }
  
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }
  
  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/auth']);
  }
  
  private handleError(error: any): Observable<never> {
    console.error('Ocorreu um erro', error); 
    return throwError(() => new Error('Erro ao efetuar login. Tente novamente mais tarde.'));
  }
}
