import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DingTalkService {

  //server = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  /**
   * 获取钉钉config
   */
  getConfig(corpId: string): Observable<DingConfig> {
    const url = `/dingtalk/dd/config/${corpId}`;
    // @ts-ignore
    return this.http.get<Res<DingConfig>>(url).pipe(map(res => res.data));
  }
}
