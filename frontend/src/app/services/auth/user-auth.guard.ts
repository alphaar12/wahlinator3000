import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {StorageService} from "../storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.storageService.getUser();

    if (user && user.roles && (user.roles.includes('ROLE_USER') || user.roles.includes('ROLE_ADMIN'))) {
      return true;
    } else {
      console.log('Access denied, not a user or admin');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
