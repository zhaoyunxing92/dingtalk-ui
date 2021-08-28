import {NgModule} from '@angular/core';
import {MandateModule} from "./mandate/mandate.module";
import {WelcomeModule} from "./welcome/welcome.module";
import { ChatComponent } from './chat/chat.component';

@NgModule({
  exports: [MandateModule, WelcomeModule],
  declarations: [
    ChatComponent
  ]
})
export class PagesModule {
}
