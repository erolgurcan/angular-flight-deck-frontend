import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { LandingpageModule } from './landingpage/landingpage.module';
import { InfopageModule } from './infopage/infopage.module';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ChartComponent } from './chart/chart.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
;

@NgModule({
  declarations: [
    AppComponent, LoginComponent, DashboardComponent, MapComponent, ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    LandingpageModule,
    InfopageModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxChartsModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
