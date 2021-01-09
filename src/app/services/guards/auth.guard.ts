import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private as: AuthService , private router: Router) { }
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      return new Promise(resolve => {
        // tslint:disable-next-line: no-shadowed-variable
        this.as.user.subscribe(user => {
          if (user) {
            resolve(true);
          }
          // tslint:disable-next-line: one-line
          else { this.router.navigate(['/logIn']);
          // tslint:disable-next-line: align
          resolve(false);
        }
      });
    });

}
}
