// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export interface ApiReponse<T, D> {
  code: number;
  meta?: T;
  payload: D;
}

export type User = {
  id: number;
  name: string;
};

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
