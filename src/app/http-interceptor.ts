// http-interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class YourHttpInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Modify the request (add headers, authentication, etc.)
    const modifiedRequest = request.clone({
      setHeaders: {
        'Your-Custom-Header': 'header-value',
      },
    });

    // Pass the modified request to the next handler
    return next.handle(modifiedRequest);
  }
}
