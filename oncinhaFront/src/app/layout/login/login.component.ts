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
