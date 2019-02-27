import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// angular forms modules
import { ReactiveFormsModule } from '@angular/forms';

// importing routing module
import { AppRoutingModule } from './app-routing.module';

// importing component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewUserComponent,
    AddPersonComponent,
    NavbarComponent,
    LogoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
