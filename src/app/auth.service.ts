import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Apiservice } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor( private apiService: Apiservice, private router: Router) { }


  login (username: string, password: string){

    console.log(username, password)
      this.apiService.login(username, password).subscribe(  () => {this.router.navigate( ['/dashboard'] )}  );
      

  }
}
