import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userData = localStorage.getItem('USER');

    if (!userData) {
      this.router.navigate(['/'], { queryParams: { login: 'true' } });
      return false;
    }

    const user = JSON.parse(userData);
    const roles: string[] = user.roles || [];

    const url = state.url.toLowerCase();

    const routeRoleMap: { [key: string]: string } = {
      '/doadores': 'doador',
      '/admin': 'admin',
      '/familias': 'familia',
    };

    for (const routePrefix in routeRoleMap) {
      if (url.startsWith(routePrefix)) {
        const requiredRole = routeRoleMap[routePrefix];

        if (!roles.includes(requiredRole)) {
          this.router.navigate(['/'], { queryParams: { login: 'true' } });
          return false;
        }
      }
    }

    return true;
  }
}
