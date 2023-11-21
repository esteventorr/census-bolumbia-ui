import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/login'; // URL para el endpoint de login

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }) {
    //return this.http.post(this.loginUrl, credentials);
    return this.http.get(this.loginUrl);
  }
}
