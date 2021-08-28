import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome.component';
import {ChatComponent} from "../chat/chat.component";
import {MandateComponent} from "../mandate/mandate.component";

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'mandate', component: MandateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {
}
