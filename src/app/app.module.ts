import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { SignupDataComponent } from './signup-data/signup-data.component';
import { UsersComponent } from './users/users.component';
import { appRouterModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    SignupDataComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
