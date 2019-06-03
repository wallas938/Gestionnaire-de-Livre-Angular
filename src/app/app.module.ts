import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ListBooksPageComponent } from './list-books-page/list-books-page.component';
import { BookDetailPageComponent } from './book-detail-page/book-detail-page.component';
import { BookEditerPageComponent } from './book-editer-page/book-editer-page.component';
import { AddBookPageComponent } from './add-book-page/add-book-page.component';
import { AuthGuard } from './services/auth-gard.service';
import { AuthService } from './services/auth.service';
import { FourOhFourPageComponent } from './four-oh-four-page/four-oh-four-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { UserService } from './services/user-service';
import { BookService } from './services/book-service';


const myAppRoutes: Routes = [
  { path: 'home', component: LoginPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'user-books/:id', canActivate: [AuthGuard], component: ListBooksPageComponent },
  { path: 'add-new-book/:id', canActivate: [AuthGuard], component: AddBookPageComponent },
  { path: '', component: LoginPageComponent },
  { path: 'not-found', component: FourOhFourPageComponent },
  { path: '**', redirectTo: 'not-found' }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    ListBooksPageComponent,
    BookDetailPageComponent,
    BookEditerPageComponent,
    AddBookPageComponent,
    FourOhFourPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myAppRoutes)
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
