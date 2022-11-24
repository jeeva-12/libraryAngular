import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministatorLoginComponent } from './administator-login/administator-login.component';
import { UserRegistrartionComponent } from './user-registrartion/user-registrartion.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministatorLoginComponent,
    UserRegistrartionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
