import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HourlyforecastComponent } from './hourlyforecast/hourlyforecast.component';
import { TendayforecastComponent } from './tendayforecast/tendayforecast.component';
import { CurrentforecastComponent } from './currentforecast/currentforecast.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    HourlyforecastComponent,
    TendayforecastComponent,
    CurrentforecastComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
