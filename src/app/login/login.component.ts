import { Component } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    userName :string = "";
    password : string = "";
  

    constructor( private authService: AuthService ) {}

    submitForm( submitNGForm: NgForm ){

      if(submitNGForm.touched == false) return;
      if(submitNGForm.valid == false) return;

      
        console.log( this.password )
        console.log(this.userName)

        this.authService.login(this.userName, this.password);
        
    }

}
