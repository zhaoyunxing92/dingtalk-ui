import {NgModule} from '@angular/core';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {IconsModule} from "./icons.module";


@NgModule({
  exports: [
    NzGridModule,
    NzCardModule,
    NzDividerModule,
    IconsModule,
  ]
})
export class AntdModule {
}
