import { CanActivateFn } from '@angular/router';

export const loggedGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = true;
  return isAuthenticated;
};
