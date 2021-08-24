import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NZ_I18N, zh_CN} from "ng-zorro-antd/i18n";


import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {PagesModule} from "../pages/pages.module";
import {ShareModule} from "../share/share.module";
import {RouterModule} from "@angular/router";

registerLocaleData(zh);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([])
  ],
  exports: [ShareModule, PagesModule],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
})
export class CoreModule {
}
