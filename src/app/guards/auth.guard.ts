import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  if (!!localStorage.getItem('id_token')) {
    return true;
  } else {
    inject(Router).navigateByUrl('/');
    return false;
  }
};
