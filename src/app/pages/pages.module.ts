import {NgModule} from '@angular/core';
import {MandateModule} from "./mandate/mandate.module";
import {WelcomeModule} from "./welcome/welcome.module";
import {ChatModule} from "./chat/chat.module";
import {SsoModule} from "./sso/sso.module";

@NgModule({
  exports: [MandateModule, WelcomeModule, ChatModule, SsoModule],
})
export class PagesModule {
}
