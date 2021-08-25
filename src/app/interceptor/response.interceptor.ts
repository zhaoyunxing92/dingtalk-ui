import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NzNotificationService} from "ng-zorro-antd/notification";
import {map, retry, tap} from "rxjs/operators";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private notification: NzNotificationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      retry(3),
      tap(
        res => {
          if (res instanceof HttpResponse) {
            const {succeed = false, code = -1, msg = ""} = res.body
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
      )/*,
      map(res => {
        if (res instanceof HttpResponse) {
          console.log(res.body.data)
          return res.body.data
        }else {
          return ""
        }
      })*/
    );
  }
}
