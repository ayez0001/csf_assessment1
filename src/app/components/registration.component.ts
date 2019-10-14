import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { CountriesService } from '../services/countries.service';
import { UsersService } from '../services/users.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import { Registration } from '../models/Register';
import * as moment from "moment";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  model = new Registration('','','F','','','','','');
  gender = [
    {name:'Male', value:'M'}, 
    {name:'Female', value:'F'}
  ];
  ageCheckFlag: boolean = false;

  nationalities: any;

  constructor(private snackBar: MatSnackBar, 
    private countriesSvc: CountriesService,
    private usersSvc: UsersService,
    private router: Router) { 
      
  }

  ngOnInit() {
    this.countriesSvc.getCountries().then(result=>{
      this.nationalities = result;
      this.model.country = 'SG';
    }).catch((error)=>{
      let snackBarRef = this.snackBar.open(error, "Close", {
        duration: 3000
      });
    })
  }

  checkAge() {
    let dobDate = new Date(this.model.dob);
    const today = moment();
    const delta = today.diff(dobDate, "years", false);
    if (delta < 18) {
      console.log("less than !")
      let snackBarRef = this.snackBar.open("Registrant must be at least 18 yrs old.", "Done");
      this.ageCheckFlag = true;
    }else{
      this.ageCheckFlag = false;
    }
  }

  onSubmit(){
    
    let registerUserObj = {
      email: this.model.email,
      password: this.model.password,
      name: this.model.name,
      gender: this.model.gender,
      dob: this.model.dob,
      address: this.model.address,
      country: this.model.country,
      contactNo: this.model.contactNo
    }
    this.checkAge();
    if(!this.ageCheckFlag){
      this.usersSvc.registerUser(registerUserObj);
      let snackBarRef = this.snackBar.open("User registered!", "Done", {
        duration: 3000
      });
      this.router.navigate(['confirm']);
    }
    
  }

  resetForm(){
    this.model = new Registration('','','F','','','SG','','');
  }
}
