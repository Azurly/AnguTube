import { Injectable } from '@angular/core';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  playlists: number[];
}

@Injectable({
  providedIn: 'root',
})

export class Users {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'john_doe',
      email: 'john.doe@example.com',
      password: 'securepassword',
      playlists: [1, 2, 3]
    },
    {
      id: 2,
      username: 'jane_smith',
      email: 'jane.smith@example.com',
      password: 'anotherpassword',
      playlists: [4, 5]
    }
  ];

  getUserByUsername(username: string): User | undefined {
    return this.users.find(user => user.username === username);
  }

  getUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
