import {Component} from '@angular/core';
import {DingTalkService} from "../../service/dingtalk.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import * as dd from 'dingtalk-jsapi';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent {

  constructor(private dingTalkService: DingTalkService, private notification: NzNotificationService) {
    this.dingTalkService.getConfig("dingc7c5220402493357f2c783f7214b6d69").subscribe(conf => {
      dd.config({
        agentId: conf?.agentId, // 必填，微应用ID
        corpId: conf?.corpId,//必填，企业ID
        timeStamp: conf?.timeStamp, // 必填，生成签名的时间戳
        nonceStr: conf?.nonce, // 必填，自定义固定字符串。
        signature: conf?.signature, // 必填，签名
        type: conf?.type,   //选填。0表示微应用的jsapi,1表示服务窗的jsapi；不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
        jsApiList: conf?.apis
      });
      dd.error(err => {
        this.notification.error("钉钉环境初始化异常", `${err.errorMessage || '请在钉钉环境下打开'}`)
      });
    });
  }
}
