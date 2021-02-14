import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DataService } from 'src/app/_service/data-service.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private dataService: DataService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            // this.dataService.stopLoader();
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.dataService.showError(err.error['responseMessage']);
                this.dataService.logout();
                location.reload(true);
            }
            else if(err.status != 200){
                this.dataService.showError(err.error['responseMessage']);
            }
            const error = err.error || err.statusText;
            return throwError(error);
        }))
    }
}