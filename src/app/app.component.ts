import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  labels: Label[] = []

  ngOnInit(): void {
    this.labels = [
      {
        name: "免登",
        path: "/login",
        desc: "钉钉免登相关操作"
      },
      {
        name: "设备",
        path: "/login",
        desc: "钉钉免登相关操作"
      }, {
        name: "会话",
        path: "/login",
        desc: "钉钉免登相关操作"
      }, {
        name: "通讯录选人",
        path: "/login",
        desc: "钉钉免登相关操作"
      }, {
        name: "自定义联系人",
        path: "/login",
        desc: "钉钉免登相关操作"
      }, {
        name: "通讯录选人",
        path: "/login",
        desc: "钉钉免登相关操作"
      }, {
        name: "通讯录选人",
        path: "/login",
        desc: "钉钉免登相关操作"
      }
    ]
  }
}
