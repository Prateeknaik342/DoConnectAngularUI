import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  //NgModel support 
import { HttpClient,HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http' ;
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Register/user/user.component';
import { QuestionComponent } from './Questions/question/question.component';
import { LoginComponent } from './Login/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    QuestionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
