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
    const url = `/dingtalk/dd/config?corpId=${corpId}`;
    return this.http.get<Res<DingConfig>>(url).pipe(map<Res<DingConfig>, DingConfig>(res => res.data || {}));
  }

  /**
   * 获取用户信息
   * @param corpId 企业id
   * @param code 临时授权码
   */
  getUserInfo(corpId: string, code: string): Observable<UserDetail> {
    const url = `/dingtalk/user/detail?corpId=${corpId}&code=${code}`;
    return this.http.get<Res<UserDetail>>(url).pipe(map<Res<UserDetail>, UserDetail>(res => res.data || {}));
  }
}

