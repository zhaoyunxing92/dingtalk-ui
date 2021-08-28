import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DingTalkService} from "../../service/dingtalk.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {map} from "rxjs/operators";
import {UserInfo} from "../../domain/user.info";

@Component({
  selector: 'app-sso',
  templateUrl: './sso.component.html',
  styleUrls: ['./sso.component.less']
})
export class SsoComponent implements OnInit {

  userInfo: UserInfo = {}

  constructor(private dingTalkService: DingTalkService, private notification: NzNotificationService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(map(params => params.code)).subscribe(code => {
      if (code) {
        this.dingTalkService.ssoLogin(code).subscribe(userInfo => {
          this.userInfo = userInfo
          console.log(userInfo)
        })
      } else {
        this.notification.warning(
          "sso登录失败",
          '无法获取code，请在钉钉后台点击该应用登录',
          {nzDuration: 0})
      }
    });
  }
}
