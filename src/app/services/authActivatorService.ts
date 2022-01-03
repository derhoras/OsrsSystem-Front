import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from "rxjs";
import { AuthService } from "./authService";

@Injectable()
export class AuthActivator implements CanActivate {
    constructor(private auth: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean> | UrlTree | Promise<boolean> {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(["login"]);
            return false;
        } else {
            return true;
        }
    }
}