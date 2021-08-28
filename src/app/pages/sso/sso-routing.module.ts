import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SsoComponent} from "./sso.component";

const routes: Routes = [
  {path: 'sso', component: SsoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SsoRoutingModule {
}
