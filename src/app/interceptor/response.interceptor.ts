import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {NzNotificationService} from "ng-zorro-antd/notification";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private notification: NzNotificationService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<Res<any>>> {
    this.notification.error('接口异常','我就想弹出')
    return next.handle(req);
  }
}
