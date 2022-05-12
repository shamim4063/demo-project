import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
// import { deleteCookie } from './shared/functions/coockie';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toaster: ToastrService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errMsg = '';
        if (error.status === 403) {
          this.toaster.error(
            'Your session is out. Please login again',
            'Error Done'
          );
          // deleteCookie('token');
          this.router.navigateByUrl('/');
        } else if (error.status === 401) {
          this.toaster.error('Unauthorized request.', 'Error');
        } else if (error.error instanceof ErrorEvent) {
          errMsg = `Error: ${error.error.message}`;
        } else {
          errMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        return throwError(errMsg);
      })
    );
  }
}
