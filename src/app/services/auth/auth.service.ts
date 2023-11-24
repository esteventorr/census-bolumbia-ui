import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from 'src/app/constants/api';
import { LoginRequest } from 'src/app/interfaces/form';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }) {
    let body: LoginRequest = {
      ecf: credentials.username,
      ecn: credentials.password,
    };
    return this.http.post(ENDPOINTS.LOGIN, body);
  }

  loginSupport(credentials: { username: string; password: string }) {
    let body: LoginRequest = {
      ecf: credentials.username,
      ecn: credentials.password,
    };
    return this.http.post(ENDPOINTS.LOGIN_SUPPORT, body);
  }
}
