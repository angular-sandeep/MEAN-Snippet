import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// angular-material import
import { CustomMaterialModule } from './CustomMaterial.module';
import { LoginComponentComponent } from './login-component/login-component.component';
import { LogoutComponentComponent } from './logout-component/logout-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    LogoutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
