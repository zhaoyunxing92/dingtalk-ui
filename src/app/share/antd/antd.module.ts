import { NgModule } from '@angular/core';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDividerModule} from "ng-zorro-antd/divider";


@NgModule({
  exports:[
    NzGridModule,
    NzCardModule,
    NzDividerModule,
  ]
})
export class AntdModule { }
