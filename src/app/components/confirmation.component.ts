import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Registration } from '../models/Register';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  model: Registration;

  constructor(private userSvc: UsersService) { }

  ngOnInit() {
    this.model = this.userSvc.getRegisteredUser();
    console.log(this.model);
  }

}
