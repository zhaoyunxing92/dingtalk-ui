import { NgModule } from '@angular/core';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";


@NgModule({
  exports:[
    NzGridModule,
    NzCardModule,
  ]
})
export class AntdModule { }
