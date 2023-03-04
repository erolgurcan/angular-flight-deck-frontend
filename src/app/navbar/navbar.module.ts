import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, BrowserAnimationsModule, MatTabsModule, RouterModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
