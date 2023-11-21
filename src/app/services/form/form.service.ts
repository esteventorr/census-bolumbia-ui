import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'http://localhost:3000/responses';

  constructor(private http: HttpClient) {}

  submitResponses(responses: any) {
    return this.http.post(this.apiUrl, { responses });
  }
}
