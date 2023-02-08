import { Injectable } from '@angular/core';
import { Fan } from '../types/Fan';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  private _fanList: Fan[] = [
    { name: 'Pierre', birthDate: new Date("1996-05-13"), series: ['The Boys', 'One piece', 'Trigun'] },
    { name: 'Ryan', birthDate: new Date("1998-04-13"), series: ['The Boys', 'One piece', 'Naruto'] },
  ];

  constructor() { }

  getAll() {
    return this._fanList;
  }

  getOne(name: string) {
    return this._fanList.find((fan) => fan.name === name);
  }
  
}
