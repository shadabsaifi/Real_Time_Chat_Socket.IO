import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DataService } from 'src/app/_service/data-service.service';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private dataService: DataService
    ) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // var loginToken = this.commonService.getCookies('currentUsertoken') || ""
        var loginToken = this.dataService.getCookies('currentUsertoken') || ""
        if (loginToken) {
            // logged in so return true
            var user_type = this.dataService.getCookies('currentUser');
            user_type = JSON.parse(user_type).user_type;
            var navigateUrl = route.url[0].path;
            if(navigateUrl != user_type){
                this.router.navigate([user_type]);
            }
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['auth/login']);
        return false;
    }
}