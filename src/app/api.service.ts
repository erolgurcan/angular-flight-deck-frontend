import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Apiservice {

  constructor( private httpClient: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  login (username:string, password:string): Observable<any> {
  
      return this.httpClient.post('https://flight-data-server.azurewebsites.net/api/UsersAuth/login', {"userName": username, "password": password}, this.httpOptions)
  }

  getLatestData() : Observable<any> {
      return this.httpClient.get('https://flight-data-server.azurewebsites.net/api/FlightData/get/latest')
  }

}
