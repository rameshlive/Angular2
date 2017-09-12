import { Component } from '@angular/core';
export class login{
    getItem(){
      
            var loginItems = [
                { name : 'ramesh' },
                { password : 'asdfasf'}
            ]
          
            localStorage.setItem('login',JSON.stringify(loginItems));
    }
}