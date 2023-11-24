import { environment } from 'src/environments/environment';

export const API_URL = environment.backendUrl;

export const ENDPOINTS = {
  LOGIN: `${API_URL}/auth/login`,
  LOGIN_SUPPORT: `${API_URL}/auth/support-staff-login`,
  POST_ANSWERS: `${API_URL}/questionary/save-answers`,
  GET_ANSWERS: `${API_URL}/questionary`,
  POST_FORM_STATE: `${API_URL}/questionary/update-status`,
  POST_GEN_SUPPORT_REPORT: `${API_URL}/reports/generate`,
  POST_FEEDBACK: `${API_URL}/UNDEFINED`,
};
