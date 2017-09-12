import { Component, OnInit , NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  Password: string;
  getLocalStoragevalues = [];
  status :boolean = false;
  getUsers;
  constructor() {
     this.userName ="";
     this.Password = "";
   }

  ngOnInit() {

    console.log(JSON.parse(localStorage.getItem('users')));
  }

  
  onSubmit(userForm){
     
    if(this.loginValidation()){
        console.log("Login Successfull")
    }else{
      console.log("Login Failed")
    }
  }

  loginValidation(){
     var getUsers = JSON.parse(localStorage.getItem('users'));
        for (var index = 0; index < getUsers.length; index++) {
          var element = getUsers[index];
          console.log(element);
          if( this.userName == element.username && this.Password == element.password){
              this.status = true;
              break;
          }else{
             this.status = false;
          }
        }
        return this.status;
  }
}
