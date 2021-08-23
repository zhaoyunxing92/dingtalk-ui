import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AntdModule} from "./antd/antd.module";


@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, AntdModule]
})
export class ShareModule {
}
