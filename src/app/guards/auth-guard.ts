import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Users } from '../services/users';

export const authGuard: CanActivateFn = (route, state) => {
  const user = inject(Users);
    const router = inject(Router);

    if(!user.isLoggedIn()) {
        router.navigateByUrl('/login')
        return false
    }
    return true
};
