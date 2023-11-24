import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from 'src/app/constants/api';
import {
  CensusFormAnswer,
  CensusResponseRequest,
} from 'src/app/interfaces/form';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}

  sendAnswers(answers: CensusFormAnswer[]) {
    let body: CensusResponseRequest = {
      //TODO
      ecn: '1234567890',
      answers: answers,
    };
    return this.http.post(ENDPOINTS.POST_ANSWERS, { answers });
  }

  setCompletedFormState(formId: string) {
    return this.http.post(ENDPOINTS.POST_FORM_STATE, { formId });
  }

  generateReport(reportData: any) {
    return this.http.post(ENDPOINTS.POST_GEN_SUPPORT_REPORT, reportData);
  }

  sendFeedback(feedbackData: any) {
    return this.http.post(ENDPOINTS.POST_FEEDBACK, feedbackData);
  }
}
