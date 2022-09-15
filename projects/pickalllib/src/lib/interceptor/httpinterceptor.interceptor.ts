import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor  implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>,
    next: HttpHandler):Observable<HttpEvent<any>> {

const clonedRequest = req.clone({
 headers: req.headers.set(
     'X-CustomAuthHeader',
     'jwtTokenHere')
});
console.log("new headers", clonedRequest.headers.keys());
// ถ้าต้องการ set header ให้ใช้บรรทัดล่าง
//return next.handle(clonedRequest);
return next.handle(req);

}


}
