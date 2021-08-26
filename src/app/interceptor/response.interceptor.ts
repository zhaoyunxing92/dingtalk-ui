import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NzNotificationService} from "ng-zorro-antd/notification";
import {retry, tap} from "rxjs/operators";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private notification: NzNotificationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Res<any>>> {

    return next.handle(req).pipe(
      retry(3),
      tap(
        res => {
          if (res instanceof HttpResponse) {
            const {succeed, code, msg} = res.body || {succeed: false, code: -1, msg: "返回体为空"}
            if (!succeed) {
              this.notification.error('服务异常', `code:${code} msg:${msg}`)
            }
          }
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            this.notification.error('接口异常', `status:${err.status} url:${err.url}`)
          } else {
            this.notification.error('系统异常', `${err}`)
          }
        },
      ),
    );
  }
}
