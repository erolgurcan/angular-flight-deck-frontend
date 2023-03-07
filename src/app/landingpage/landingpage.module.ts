import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    LandingpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule
  ],
  exports: [
    LandingpageComponent
  ]
})
export class LandingpageModule { }
