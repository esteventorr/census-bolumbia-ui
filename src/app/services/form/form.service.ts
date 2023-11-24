import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from 'src/app/constants/api';
import {
  CensusFormAnswer,
  CensusResponseRequest,
  FormStateRequest,
} from 'src/app/interfaces/form';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  ecn: string;

  constructor(private http: HttpClient) {
    this.ecn = 'ECN1';
  }

  sendAnswers(answers: CensusFormAnswer[]) {
    let body: CensusResponseRequest = {
      //TODO
      ecn: this.ecn,
      answers: answers,
    };
    return this.http.post(ENDPOINTS.POST_ANSWERS, { answers });
  }

  getAnswers() {
    return this.http.get(`${ENDPOINTS.GET_ANSWERS}/${this.ecn}`);
  }

  setCompletedFormState(formId: FormStateRequest) {
    return this.http.post(ENDPOINTS.POST_FORM_STATE, { formId });
  }

  generateReport(reportData: any) {
    return this.http.post(ENDPOINTS.POST_GEN_SUPPORT_REPORT, reportData);
  }

  sendFeedback(feedbackData: any) {
    return this.http.post(ENDPOINTS.POST_FEEDBACK, feedbackData);
  }
}
