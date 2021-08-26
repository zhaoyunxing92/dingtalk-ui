import {Component} from '@angular/core';
import {DingTalkService} from "../../service/dingtalk.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import * as dd from 'dingtalk-jsapi';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent {

  constructor(private dingTalkService: DingTalkService, private notification: NzNotificationService,
              private route: ActivatedRoute) {

    this.route.params.pipe(map(params => params.corpId)).subscribe(corpId => {
      this.dingTalkService.getConfig(corpId).subscribe(conf => {
        dd.config({
          agentId: conf?.agentId,
          corpId: conf?.corpId,
          timeStamp: conf?.timeStamp,
          nonceStr: conf?.nonce,
          signature: conf?.signature,
          type: conf?.type,
          jsApiList: conf?.apis
        });
        dd.error(err => {
          this.notification.error("钉钉环境初始化异常", `${err.errorMessage || '请在钉钉环境下打开'}`)
        });
      });
    });
  }
}
