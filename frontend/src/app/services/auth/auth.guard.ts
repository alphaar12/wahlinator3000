import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {StorageService} from "../storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this.storageService.isLoggedIn();
    const user = this.storageService.getUser();

    if (isLoggedIn && user && user.roles && user.roles.includes('ROLE_ADMIN')) {
      return true;
    } else {
      console.log('Access denied, not logged in');
      this.router.navigate(['/login']);
      return isLoggedIn;
    }
  }
}
