import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { LandingpageModule } from './landingpage/landingpage.module';
import { InfopageModule } from './infopage/infopage.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    LandingpageModule,
    InfopageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
