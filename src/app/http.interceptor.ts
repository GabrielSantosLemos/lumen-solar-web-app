import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = '';
    const userData = localStorage.getItem('USER');

    if (userData) {
      const user = JSON.parse(userData);
      token = user.token;
    }

    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token,
      },
    });

    return next.handle(req).pipe(
      catchError(error => {
        return throwError(() => error);
      })
    );
  }
}
