import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { AuthService } from '../auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = "";
  password: string = "";

  ngOnInit() {

  }

  constructor(private authService: AuthService, private spinner: NgxSpinnerService, private router: Router) { }

  submitForm(submitNGForm: NgForm) {
    this.spinner.show();
    if (submitNGForm.touched == false) return;
    if (submitNGForm.valid == false) return;

    console.log(this.password)
    console.log(this.userName)

    this.authService.login(this.userName, this.password).subscribe(() => { 
      this.spinner.hide();
      this.router.navigate(['/dashboard']) });

  }

}
