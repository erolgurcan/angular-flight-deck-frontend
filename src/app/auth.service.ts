import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  login (username: string, password: string){

    const pass = "123";

    return password == pass?  true:  false;

  }
}
