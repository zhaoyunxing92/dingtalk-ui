import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NZ_I18N, zh_CN} from "ng-zorro-antd/i18n";


import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {PagesModule} from "../pages/pages.module";
import {ShareModule} from "../share/share.module";
import {RouterModule} from "@angular/router";
import {LoggingInterceptor} from "../interceptor/logging.interceptor";
import {ResponseInterceptor} from "../interceptor/response.interceptor";

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
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true},
  ],
})

export class CoreModule {
}
