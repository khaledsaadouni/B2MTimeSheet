import { Injectable } from '@angular/core';
import {Person} from "./model/person";

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  user;
  constructor() {
    this.user=new Person('user','user',123456789,'useruser@gmail.com','developper','userskpe','20220714')
  }
}
