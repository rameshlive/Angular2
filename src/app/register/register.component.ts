import { Component, OnInit } from '@angular/core';
import { Users } from './userregister';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {
  user;
  newuser;
  userName: string;
  pwd: string;
  email : string;
  successMsg: string;
  constructor() {
   
   }

  ngOnInit() {

        if( localStorage.getItem('users') == null || localStorage.getItem('users') == undefined ){
          this.newuser = [
            {username : 'ramesh' , password : 'reset@123' , email : 'ramesh.canny@gmail.com'}
          ];
          localStorage.setItem('users',JSON.stringify(this.newuser));
          
        }

        var test11 =  JSON.parse(localStorage.getItem('users'));
        console.log(test11);
  }

  onSubmit(registerForm){
      
      this.newuser = { 
         username: registerForm.username,
         password: registerForm.pwd,
         email :registerForm.email
       };
     

       if( localStorage.getItem('users') == null || localStorage.getItem('users') == undefined ){
  
           localStorage.setItem('users',JSON.stringify(this.newuser));
        
      } else{

        var test1 = [];

        test1 =  JSON.parse(localStorage.getItem('users'));
        test1.push(this.newuser);
        localStorage.setItem('users',JSON.stringify(test1));
        this.successMsg = "Register Successfully";

    }
      
  }


     
  

}
