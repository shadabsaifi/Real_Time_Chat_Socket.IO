import { Injectable,  } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DataService } from 'src/app/_service/data-service.service';


@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    public accessToken: string = "";
    
    constructor(private dataService: DataService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.accessToken = this.dataService.getCookies("currentUsertoken") || "";
        // Clone the request to add the new header.
        const headers: any = new HttpHeaders({
            'x-access-token': this.accessToken,
            // 'Content-Type': 'application/json',
            // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Origin, Content-Type, X-Auth-Token, x-access-token',
            // 'Access-Control-Allow-Origin': '*'
        });
        const authReq = req.clone({ headers });
        // send the newly created request
        return next.handle(authReq)
            .pipe(
                catchError((error, caught) => {
                    // intercept the respons error and displace it to the console
                    console.log(error);
                    // return the error to the method that called it
                    return throwError(error);
                })
            );
    }
}