import {NgModule} from '@angular/core';
import {WelcomeComponent} from './welcome/welcome.component';
import {ShareModule} from "../share/share.module";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDividerModule} from "ng-zorro-antd/divider";


@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    ShareModule,
    NzDividerModule,
  ]
})
export class PagesModule {
}
