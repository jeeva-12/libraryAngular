import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministatorLoginComponent } from './administator-login/administator-login.component';
import { UserRegistrartionComponent } from './user-registrartion/user-registrartion.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministatorLoginComponent,
    UserRegistrartionComponent,
    UserLoginComponent,
    BookEntryComponent,
    BookViewComponent,
    BookSearchComponent,
    BookEditComponent,
    BookIssueComponent,
    BookDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
