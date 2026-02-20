import { Component, inject } from '@angular/core';
import { Users } from '../../services/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private user = inject(Users);
  private router = inject(Router);

  login(username: string, password: string) {
    const user = this.user.getUserByUsername(username);
    if (user && user.password === password) {
      this.user.login(user.id);
      this.router.navigateByUrl('/playlists');
    } else {
      console.error('Invalid login credentials');
    }
  }
}
