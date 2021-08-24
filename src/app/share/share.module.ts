import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AntdModule} from "./antd/antd.module";
import {RouterModule} from "@angular/router";


@NgModule({
  exports: [CommonModule, RouterModule, AntdModule]
})
export class ShareModule {
}
