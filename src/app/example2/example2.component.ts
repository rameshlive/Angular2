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
  sliderValue : number;

  Submitted:boolean = true;
  authors: Author[];

  constructor() { 

     
  }

  ngOnInit() {
    if( (localStorage.getItem('itemlist') == null) || (localStorage.getItem('itemlist') == undefined) ){

      this.authors = [
        { 
           title:'Harry Potter' ,
           author : 'John Resig' ,
           email : 'ramesh.canny@gmail.com',
           URL : 'http://www.google.com',
           age : 73
        },
        { 
          title:'Avatar' ,
          author : 'James Cameron' ,
          email : 'james@avatar.com',
          URL : 'http://avatar.com',
          age : 67
       },
       { 
          title:'AirLift' ,
          author : 'Akshay Kumar' ,
          email : 'james@airlift.com',
          URL : 'http://airlift.com',
          age : 23
      },
      { 
          title:'3 Idiots' ,
          author : 'Shankar Kumar' ,
          email : 'shankar@idiots.com',
          URL : 'http://idiots.com',
          age : 23
      },
      { 
        title:'Harry Potter1' ,
        author : 'John Resig1' ,
        email : 'ramesh.canny@gmail.com',
        URL : 'http://www.google.com',
        age : 73
     }
      ];

      localStorage.setItem('itemlist', JSON.stringify(this.authors));



    } else{

        this.authors = JSON.parse(localStorage.getItem('itemlist'));

    }

  }

  onSubmit(userForm){


    this.authors.push({
      title:userForm.title,
      author:userForm.author,
      email:userForm.email,
      URL:userForm.url,
      age:23
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
     URL:  string,
     age : number
}