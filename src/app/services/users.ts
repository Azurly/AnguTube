import { Injectable } from '@angular/core';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  playlists: number[];
  isAuthenticated?: boolean;
}

@Injectable({
  providedIn: 'root',
})

export class Users {
  
  private isAuthenticated = false;
  private currentUserId: number | null = null;
  private users: User[] = [];
  private readonly STORAGE_KEY = 'angu-tube-users';

  constructor() {
    this.loadUsers();
  }

  getUserByUsername(username: string): User | undefined {
    return this.users.find(user => user.username === username);
  }

  getUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  createUser(username: string, email: string, password: string): User {
    const newUser: User = {
      id: this.users.length + 1,
      username,
      email,
      password,
      playlists: []
    };
    this.users.push(newUser);
    this.saveUsers();
    return newUser;
  }

  private saveUsers() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.users));
  }

  private loadUsers() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      this.users = JSON.parse(stored);
    } else {
      // Default users if localStorage is empty
      this.users = [
        {
          id: 1,
          username: 'john_doe',
          email: 'john.doe@example.com',
          password: 'securepassword',
          playlists: [1, 2, 3],
          isAuthenticated: false
        },
        {
          id: 2,
          username: 'jane_smith',
          email: 'jane.smith@example.com',
          password: 'anotherpassword',
          playlists: [4, 5],
          isAuthenticated: false
        }
      ];
      this.saveUsers();
    }
  }

  login(userId?: number) {
    this.isAuthenticated = true;
    if (userId !== undefined) this.currentUserId = userId;
    this.saveAuth();
  }

  logout() {
    this.isAuthenticated = false;
    this.currentUserId = null;
    localStorage.removeItem('angu-tube-auth');
  }
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getCurrentUser(): User | undefined {
    return this.currentUserId !== null ? this.getUserById(this.currentUserId) : undefined;
  }

  private saveAuth() {
    localStorage.setItem('angu-tube-auth', JSON.stringify({ isAuthenticated: this.isAuthenticated, currentUserId: this.currentUserId }));
  }
}
