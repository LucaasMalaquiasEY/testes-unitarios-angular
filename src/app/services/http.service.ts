import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl: string = 'http://localhost:3000'

  constructor(
    public http: HttpClient
  ) {}
  
  getUser() {
    return this.http.get(`${this.apiUrl}/user`)
  }

}
