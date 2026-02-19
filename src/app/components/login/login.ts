import { Component, inject } from '@angular/core';
import { Users } from '../../services/users';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private user = inject(Users);

  login(username: string, password: string) {
    const user = this.user.getUserByUsername(username);
    if (user && user.password === password) {
      this.user.login();
    } else {
      console.error('Invalid login credentials');
    }
  }
}
