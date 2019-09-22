import { Injectable } from '@angular/core';

export interface ResponseI {
  list: object[];
}

export interface DayI {
  date: string;
  time: string[];
  temperature: number[];
  humidity: number[];
  order: number;
}

// export interface DataLineI {
//   main: {
//     temp: number,
//     humidity: number
//   };
// }

@Injectable({
  providedIn: 'root'
})
export class InterfacesService {

  constructor() { }

}
