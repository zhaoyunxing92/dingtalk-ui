import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../router/app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NZ_I18N, zh_CN} from "ng-zorro-antd/i18n";


import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {PagesModule} from "../pages/pages.module";
import {ShareModule} from "../share/share.module";

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  exports: [ShareModule, PagesModule, AppRoutingModule],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
})
export class CoreModule {
}
