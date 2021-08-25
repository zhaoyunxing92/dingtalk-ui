import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DingTalkService {

  //server = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  /**
   * 获取钉钉config
   */
  getConfig(): Observable<Res<DingConfig>> {
    const url = `/dingtalk/dd/config`;
    return this.http.get<Res<DingConfig>>(url);
  }
}
