import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  firstName: string;
  constructor() {
    this.firstName = '';
  }
}

