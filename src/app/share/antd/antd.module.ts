import {NgModule} from '@angular/core';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {IconsModule} from "./icons.module";
import {NzNotificationModule} from 'ng-zorro-antd/notification';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzMenuModule} from "ng-zorro-antd/menu";

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
  ]
})
export class AntdModule {
}
