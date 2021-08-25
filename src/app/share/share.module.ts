import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AntdModule} from "./antd/antd.module";
import {RouterModule} from "@angular/router";


@NgModule({
  exports: [AntdModule, CommonModule, RouterModule]
})
export class ShareModule {
}
