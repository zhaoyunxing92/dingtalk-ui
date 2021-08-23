import {NgModule} from '@angular/core';
import {WelcomeComponent} from './welcome/welcome.component';
import {ShareModule} from "../share/share.module";


@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    ShareModule,
  ]
})
export class PagesModule {
}
