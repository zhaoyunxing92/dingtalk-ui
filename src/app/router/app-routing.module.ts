import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "../pages/welcome/welcome.component";
import {ApproveComponent} from "../pages/approve/approve.component";

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent, pathMatch: 'full'},
  // {path: '**', redirectTo: '/welcome'},
  {path: 'mandate/approval', component: ApproveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, /*{enableTracing: true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
