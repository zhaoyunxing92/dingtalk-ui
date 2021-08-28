import {NgModule} from '@angular/core';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {IconsModule} from "./icons.module";
import {NzNotificationModule} from 'ng-zorro-antd/notification';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzButtonModule} from "ng-zorro-antd/button";

import {NzConfig, NZ_CONFIG} from 'ng-zorro-antd/core/config';

/**
 * <a href="https://ng.ant.design/docs/global-config/zh">全局配置</a>
 */
const config: NzConfig = {
  message: {nzMaxStack: 3},
  notification: {nzMaxStack: 3}
};

@NgModule({
  exports: [
    NzGridModule,
    NzCardModule,
    NzDividerModule,
    IconsModule,
    NzNotificationModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzAvatarModule,
    NzButtonModule,
  ],
  providers: [
    {provide: NZ_CONFIG, useValue: {config}}
  ],
})
export class AntdModule {
}
