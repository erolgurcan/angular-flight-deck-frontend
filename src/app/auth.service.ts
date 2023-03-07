import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Apiservice } from './api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor( private apiService: Apiservice) { }


  login (username: string, password: string):Observable<any>{
      return this.apiService.login(username, password);
      

  }
}
