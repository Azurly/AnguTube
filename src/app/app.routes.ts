import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Notfound } from './components/notfound/notfound';
import { Register } from './components/register/register';
import { Playlists } from './components/playlists/playlists';
import { Profile } from './components/profile/profile';
import { authGuard } from './guards/auth-guard';
export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'login', component: Login, title: 'Login' },
    { path: 'register', component: Register, title: 'Register' },
    { path: 'playlists', component: Playlists, title: 'My Playlists', canActivate: [authGuard], },
    { path: 'profile', component: Profile, title: 'My Profile', canActivate: [authGuard], },
    { path: '**', component: Notfound, title: 'Not Found'}
];
