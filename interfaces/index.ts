export interface ApiReponse<T, D> {
  code: number;
  meta?: T;
  payload: D;
}

export interface StudyModel {
  id: number;
  category: 'FE' | 'BE' | 'APP';
  name: string;
  description: string;
}

export interface StudyDetailModel extends StudyModel {
  location: string;
  startDateTime: string;
  endDateTime: string;
  speaker: string[];
  stack: string[];
}
