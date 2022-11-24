import { Component, NgModule } from '@angular/core';
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
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=
[
  {
    path:"",
    component:AdministatorLoginComponent
  },
  {
    path:"delete",
    component:BookDeleteComponent
  },
  {
    path:"edit",
    component:BookEditComponent
  },
  {
    path:"entry",
    component:BookEntryComponent
  },
  {
    path:"issue",
    component:BookIssueComponent
  },
  {
    path:"search",
    component:BookSearchComponent
  },
  {
    path:"view",
    component:BookViewComponent
  },
  {
    path:"login",
    component:UserLoginComponent
  },
  {
    path:"reg",
    component:UserRegistrartionComponent
  }
]

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
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
