import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "../pages/welcome/welcome.component";

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: '**', redirectTo: '/welcome'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, /*{enableTracing: true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
