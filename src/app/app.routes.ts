import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Notfound } from './components/notfound/notfound';

export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'login', component: Login, title: 'Login' },
    { path: '**', component: Notfound, title: 'Not Found'}
];
