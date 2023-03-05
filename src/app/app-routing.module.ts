import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfopageComponent } from './infopage/infopage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    component: LandingpageComponent,
    path: '',
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: InfopageComponent,
    path: 'info'
  },
  {
    component: DashboardComponent,
    path: 'dashboard'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
