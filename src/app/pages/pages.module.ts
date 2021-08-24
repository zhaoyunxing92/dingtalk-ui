import {NgModule} from '@angular/core';
import {WelcomeComponent} from './welcome/welcome.component';
import {ShareModule} from "../share/share.module";
import { ApproveComponent } from './approve/approve.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    WelcomeComponent,
    ApproveComponent,
  ],
  imports: [
    ShareModule,
    RouterModule,
  ]
})
export class PagesModule {
}
