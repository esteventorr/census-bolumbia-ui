export interface CensusQuestion {
  id: number;
  type: 'text' | 'number' | 'option';
  prompt: string;
  options?: string[];
  response: string | number | null;
  other?: string;
}

export interface CensusFormAnswer {
  question_id: number | string;
  person_id: number;
  people_number: number;
  answer: string;
}

export interface CensusResponseRequest {
  ecn: string;
  answers: CensusFormAnswer[];
}

export interface LoginRequest {
  ecf: string;
  ecn: string;
}

export interface LoginResponse {
  token: {
    data: {
      ecn: string;
      cfn: number;
      direction: string;
    };
    token: string;
  };
}

export interface LoginSupportRequest {
  ss_email: string;
  ss_password: string;
}

export interface LoginSupportResponse {
  id: number;
}

export interface FormStateRequest {
  ecn: string;
}

// Send Answers and Form Completed
export interface GeneralDataResponse {
  idquestionaryanswer: number;
  isformcomplete: boolean;
  answers: Array<{ question_id: number; answer: string }>;
  created_time: string;
  updated_time: string;
}

export interface HttpResponse {
  status: 'error' | 'success';
  statusCode: number;
  message: string;
  data?: any;
  type?: string;
}

export interface SupportReportUnitResponse extends GeneralDataResponse {
  property: {
    ecn: string;
    cfn: number;
    direction: string;
  };
}
