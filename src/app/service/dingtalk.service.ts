import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DingTalkService {

  constructor(private http: HttpClient) {
  }

  /**
   * 获取钉钉config
   */
  getConfig(corpId: string): Observable<DingConfig> {
    const url = `/dingtalk/dd/config/${corpId}`;
    return this.http.get<Res<DingConfig>>(url).pipe(map<Res<DingConfig>, DingConfig>(res => res.data || {}));
  }
}
