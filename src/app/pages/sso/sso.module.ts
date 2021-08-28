import {NgModule} from '@angular/core';
import {SsoComponent} from "./sso.component";
import {ShareModule} from "../../share/share.module";
import {SsoRoutingModule} from "./sso-routing.module";

@NgModule({
  declarations: [SsoComponent],
  imports: [ShareModule],
  exports: [SsoRoutingModule]
})
export class SsoModule {
}
