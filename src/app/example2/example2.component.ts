import { Component, NgModule, OnInit } from '@angular/core';
import { FilterPipe } from '../filter.pipe';


@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {

  authordetails;
  authorData: any[];
  title:string;
  author : string;
  email : string;
  URL : string;

  Submitted:boolean = true;
  authors: Author[]= [];

  constructor() { 
     
     
  }

  ngOnInit() {
    if(localStorage.getItem('itemlist') === null && localStorage.getItem('itemlist') === undefined ){

      this.authors = [
        { title:'Harry Potter' , author : 'John Resig' , email : 'ramesh.canny@gmail.com' , URL : 'http://www.google.com'}
      ]
      localStorage.setItem('itemlist' , JSON.stringify(this.authors));
    } else{

        this.authors = JSON.parse(localStorage.getItem('itemlist'));
    }
  }

  onSubmit(userForm){


    this.authors.push({
      title:userForm.title,
      author:userForm.author,
      email:userForm.email,
      URL:userForm.url
    })

    localStorage.setItem('itemlist' , JSON.stringify(this.authors));
    this.Submitted = true;
  }

  removeItem(i){
      this.authors.splice(i ,1);
      if(this.authors.length == 0){
        this.Submitted =false;
      }

      localStorage.setItem('itemlist' , JSON.stringify(this.authors));
    }

}


interface Author {
     title: string,
     author: string,
     email: string,
     URL:  string
}