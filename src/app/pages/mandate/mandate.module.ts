import {NgModule} from '@angular/core';

import {MandateRoutingModule} from './mandate-routing.module';
import {ApproveComponent} from "./approve/approve.component";
import {ShareModule} from "../../share/share.module";
import {MessageComponent} from "./message/message.component";
import {UserComponent} from "./user/user.component";


@NgModule({
  declarations: [ApproveComponent, MessageComponent, UserComponent],
  imports: [ShareModule],
  exports:[MandateRoutingModule]
})
export class MandateModule {
}
