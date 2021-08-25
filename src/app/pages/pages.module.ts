import {NgModule} from '@angular/core';
import {MandateModule} from "./mandate/mandate.module";
import {WelcomeModule} from "./welcome/welcome.module";

@NgModule({
  exports: [MandateModule, WelcomeModule]
})
export class PagesModule {
}
