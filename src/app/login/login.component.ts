import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api-service.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private apiService: ApiService, private router: Router) {}

    submitForm( ){
      console.log("login component")
      this.apiService.login();
    }

}
