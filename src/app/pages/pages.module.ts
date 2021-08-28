import {NgModule} from '@angular/core';
import {MandateModule} from "./mandate/mandate.module";
import {WelcomeModule} from "./welcome/welcome.module";
import {ChatComponent} from './chat/chat.component';
import {ChatModule} from "./chat/chat.module";
import {SsoComponent} from './sso/sso.component';
import {SsoModule} from "./sso/sso.module";

@NgModule({
  exports: [MandateModule, WelcomeModule, ChatModule, SsoModule],
})
export class PagesModule {
}
