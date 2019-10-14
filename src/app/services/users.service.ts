import { Injectable } from '@angular/core';
import { Registration } from '../models/Register';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [];
  constructor() { }

  registerUser(user: Registration){
    this.users.push(user);
  }

  getRegisteredUser(){
    let returnUserObj = this.users[0];
    returnUserObj.password = "";
    return returnUserObj;
  }
}
