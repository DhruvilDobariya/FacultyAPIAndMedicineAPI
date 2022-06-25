import { Router } from '@angular/router';
import { User } from './../user';
import { ApiUserService } from './../api-user.service';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User = new User();
  user : User [] = [];
  Username : string = "";
  Password :string = "";
  isValidUser = false;
  defaultuser : User = {
    UserID :  0,
    UserName : "Dhruvil",
    Password : "Dhruvil",
    FirstName: "",
    MiddleName : "",
    LastName : "",
    ProfilePicturePath : "",
    Gender : "",
    DOB : "",
    Height : 0,
    Weight : 0,
    HeightestEducationQualification : "",
    AboutUser : "",
    Hobbies : "",
    CurrentJobTitle : "",
    CurrentSalary : 0,
    TotalExperience : 0,
    MobileNumber : "",
    EmailAddress : "",
    ResidentialAddress : "",
    CityID : 0,
    CasteID : 0,
    IsWidow : "",
    WidowDate : "",
    IsDivorced : "",
    DivorceDate : "",
    IsHandiCapped : "",
    HandiCappDetail : "",
    Expectations : "",
    Created : "",
    Modified : ""
  }
  constructor(private _api : ApiUserService,private _router : Router) { }

  ngOnInit(): void {
    alert("You can take Username and Password from user API and also use default user, Username : Dhruvil and Password : Dhruvil");
    this._api.getUser().subscribe((response : any)=>{
      this.user = response.records;
      this.user.push(this.defaultuser);
    })
  }
  checkForLogin(){
    let t = false;
    this.user.forEach((temp : User)=>{
      if(this.Username == temp.UserName && this.Password == temp.Password){
          sessionStorage.setItem('un',this.Username);
        this._router.navigate(['faculties']);
        t = true;
      }
      else{
        this.isValidUser = false;
      }
    })
    this.isValidUser = t;
    if(this.isValidUser == false){
      alert("Username and Password are invalid");
    }
  }
}

