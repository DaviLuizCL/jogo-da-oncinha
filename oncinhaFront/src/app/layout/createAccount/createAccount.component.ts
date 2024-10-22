import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './createAccount.component.html',
  styleUrls: ['./createAccount.component.scss']
})
export class CreateAccount {
  
  @Input("user") user: User = new User("", "", "");
  private authService: AuthService = inject(AuthService);
  router = inject(Router);

  createAccount() {
    this.authService.register(this.user).subscribe({
      next: response => {
        console.log('Registro realizado com sucesso!', response);
        alert("Registro realizado com sucesso!");  
        this.router.navigate(['/auth']);
      },
      error: err => {
        console.error('Erro ao registrar', err);
        if (err.status === 400) {
          alert('Erro: ' + err.error); 
        } else {
          alert('Ocorreu um erro inesperado. Tente novamente mais tarde.');
        }
      }
    });
  } 

  redirectToLogin(){
    this.router.navigate(['/auth']);
  }
}
