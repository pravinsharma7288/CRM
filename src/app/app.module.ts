import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD


import { AppComponent } from './app.component';
=======
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { SignupDataComponent } from './signup-data/signup-data.component';
import { UsersComponent } from './users/users.component';
>>>>>>> 047d0ba1670f5e44ef132465392792ecf0bdf009


@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent
  ],
  imports: [
    BrowserModule
=======
    AppComponent,
    SignupDataComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
>>>>>>> 047d0ba1670f5e44ef132465392792ecf0bdf009
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
