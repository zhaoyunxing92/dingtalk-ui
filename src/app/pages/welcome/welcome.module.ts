import {NgModule} from '@angular/core';
import {WelcomeRoutingModule} from "./welcome-routing.module";
import {WelcomeComponent} from "./welcome.component";
import {ShareModule} from "../../share/share.module";

@NgModule({
  declarations: [WelcomeComponent],
  imports:[ShareModule],
  exports: [WelcomeRoutingModule]
})
export class WelcomeModule { }
