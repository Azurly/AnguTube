import { Component, inject } from '@angular/core';
import { Users } from '../../services/users';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private user = inject(Users);
  
  register(username: string, email: string, password: string) {
    // Here you would typically call a service to register the user
    console.log('Registering user:', { username, email, password });
    // For demonstration, we'll just log the user in after registration
    this.user.login();
  }
}
