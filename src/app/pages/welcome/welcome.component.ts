import {Component, OnInit} from '@angular/core';
import {DingTalkService} from "../../service/dingtalk.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import * as dd from 'dingtalk-jsapi';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {IRuntimePermissionRequestAuthCodeResult} from "dingtalk-jsapi/api/runtime/permission/requestAuthCode";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
  /**
   * 用户详情
   */
  userDetail: UserDetail = {}

  constructor(private dingTalkService: DingTalkService, private notification: NzNotificationService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.pipe(map(params => params.corpId)).subscribe(corpId => {
      //this.initDingTalk(corpId)
      this.getUserInfo(corpId)
    });
  }

  /**
   * 初始化钉钉环境
   * @param corpId 企业id
   */
  initDingTalk(corpId: string): void {
    this.dingTalkService.getConfig(corpId).subscribe(conf => {
      dd.config({
        agentId: conf.agentId,
        corpId: conf.corpId,
        timeStamp: conf.timeStamp,
        nonceStr: conf.nonce,
        signature: conf.signature,
        type: conf.type,
        jsApiList: conf.apis
      });
      dd.error(err => {
        this.notification.error("钉钉环境初始化异常", `${err.errorMessage || '请在钉钉环境下打开'}`)
      });
    });
  }

  /**
   * 获取用户身份
   * @param corpId 企业id
   */
  getUserInfo(corpId: string): void {
    dd.ready(() => {
      dd.runtime.permission.requestAuthCode({corpId: corpId})
        .then((res: IRuntimePermissionRequestAuthCodeResult) => {
          this.dingTalkService.getUserInfo(corpId, res.code).subscribe(userDetail => {
            this.userDetail = userDetail
          })
        });
    });
  }
}
