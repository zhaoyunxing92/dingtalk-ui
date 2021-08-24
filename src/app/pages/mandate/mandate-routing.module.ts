import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApproveComponent} from "./approve/approve.component";
import {UserComponent} from "./user/user.component";
import {MessageComponent} from "./message/message.component";

const routes: Routes = [
  {path: 'mandate/approval', component: ApproveComponent},
  {path: 'mandate/user', component: UserComponent},
  {path: 'mandate/message', component: MessageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MandateRoutingModule {
}
