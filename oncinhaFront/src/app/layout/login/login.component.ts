<<<<<<< HEAD
import { Component, inject, Input } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input("user") user: User = new User("", "", "");

  router = inject(Router);
  private authService: AuthService = inject(AuthService);

  loginFailed: boolean = false;

  login() {
    console.log('Trying to log in with:', this.user);
    this.authService.login(this.user).subscribe({
      next: response => {
        console.log('Login realizado com sucesso!', response);
        this.router.navigate(['user/home']);
      },
      error: err => {
        console.error('Erro ao efetuar login', err);
        this.loginFailed = true;  
      }
    });
  }
  redirectToCreate(){
      this.router.navigate(['/createAccount']);
    }
  }
=======
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StreamerService } from '../../services/streamer.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  @Input("user") user: User = new User();

  router = inject(Router);
  userService = inject(UserService);
  stremerService = inject(StreamerService);
  
  createAccount(){
    if(String(this.user.profile[0]) == "0"){
      this.createAccountUser();
    }else if(String(this.user.profile[0]) == "1"){
      this.createAccountStreamer();
    }
  }

  createAccountUser(){
    this.userService.save(this.user).subscribe(
      (response) => {
        console.log('Usuário criado com sucesso:', response);
      },
      (error: HttpErrorResponse) => {
        console.error('Erro ao criar usuário:', error);
    }
  )}

  createAccountStreamer(){
    this.stremerService.save(this.user).subscribe(
      (response) => {
        console.log('Usuário criado com sucesso:', response);
      },
      (error: HttpErrorResponse) => {
        console.error('Erro ao criar usuário:', error);
    }
  )}
}
>>>>>>> main
