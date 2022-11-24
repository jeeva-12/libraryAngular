import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministatorLoginComponent } from './administator-login/administator-login.component';
import { UserRegistrartionComponent } from './user-registrartion/user-registrartion.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministatorLoginComponent,
    UserRegistrartionComponent,
    UserLoginComponent,
    BookEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
