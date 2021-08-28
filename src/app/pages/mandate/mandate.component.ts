import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mandate',
  templateUrl: './mandate.component.html',
  styleUrls: ['./mandate.component.less']
})
export class MandateComponent implements OnInit {
  /**
   * 标签
   */
  labels: Label[] = []

  constructor() {
    this.labels = [
      {
        name: "获取用户授权",
        path: "/mandate/user",
        desc: "钉钉免登相关操作"
      }, {
        name: "发单聊消息授权",
        path: "/mandate/message",
        desc: "钉钉免登相关操作"
      }, {
        name: "授权获取审批实例数据",
        path: "/mandate/approval",
        desc: "钉钉免登相关操作"
      }
    ]
  }

  ngOnInit(): void {
  }

}
