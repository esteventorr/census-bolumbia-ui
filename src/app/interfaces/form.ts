export interface CensusQuestion {
  id: number;
  type: 'text' | 'number' | 'option';
  prompt: string;
  options?: string[];
  response: string | number | null;
  other?: string;
}

export interface CensusResponse {
  [key: string]: any;
  responses: Array<{ questionId: number; response: string | number | null }>;
}
