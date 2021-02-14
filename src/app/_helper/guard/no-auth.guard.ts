import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/_service/data-service.service';

@Injectable({
    providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
    constructor(private router: Router, private dataService: DataService) {

    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        var loginToken = this.dataService.getCookies('currentUser') || "";
        if(loginToken){
            let user_type = this.dataService.getCookies('currentUser');
            user_type = JSON.parse(user_type).user_type;
            this.router.navigate([user_type]);
            return false;
        }
        else{
            if(window.location.pathname == '/auth/verification'){
                this.router.navigate(['/']);
                return false;                
            }
            return true;
        }
    }
}