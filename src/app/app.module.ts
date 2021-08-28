import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {ShareModule} from "./share/share.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ShareModule,
    CoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
