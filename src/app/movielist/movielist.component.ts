import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';

@Component({
  selector: 'app-movielist',
  template: `
 
    <div class="row">
      <div class="col-md-4">
          <div class="form-group">
            <label>Movie Title :</label>
            <input type="text"  [(ngModel)]="name" (keyup)="onKeyName(name)" class="form-control">
            <span *ngFor = "let letter of namevalues" class="box" >
              {{ letter }}
            </span> 
          </div>
          <div class="form-group">
            <label>Duration :</label>
            <input type="text"  [(ngModel)]="duration"  (keyup)="onKeyDuration(duration)" class="form-control">
              <span *ngFor = "let letter of durvalues" class="box" >
                {{ letter }}
              </span> 
          </div>

          <div class="form-group">
            <label>Type :</label>
            <input type="text"  [(ngModel)]="type"  (keyup)="onKeyType(type)" class="form-control">
              <span *ngFor = "let letter of typevalues" class="box" >
            {{ letter }}
          </span> 
          </div>
          
          <br>
          <button type="button" class="btn btn-primary"(click) = "addMovieTest()" >Add movie</button>
          <p>{{warning}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
           <table class="table table-hover">
            <thead>
                <tr>
                  <th>Movie Name</th>
                  <th>Duration</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
            </thead>
           <tbody>
              <tr *ngFor = "let movie of movies">
                <td> {{ movie.name }}</td>
                <td> {{ movie.duration }}</td>
                <td> {{ movie.type }}</td>
                <td>
                  <span class="list-group-addon glyphicon glyphicon-pencil text-info" (click) = editMovie(movie)></span>
                  <span class="list-group-addon glyphicon glyphicon-remove text-danger" (click) = removeMovie(movie)></span>
                </td>
              </tr>
           </tbody> 
          </table>
         
      </div>
    </div>
  `,
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  
  movies: Movie[];
  newmovie: string = "";
  warning: string="";
  namevalues: string[];
  durvalues: string[];
  typevalues: string[];

  name:string;
  duration:string;
  type:string;


  constructor() {
    this.movies = [
      { name:"Harrypotter", duration: "3 hours", type: "horror"},
      { name:"Avatar", duration: "3 hours", type: "animation"},
      { name:"Terminator", duration: "3 hours", type: "thriller"}
    ]
   }

  ngOnInit() {
  }

  onKeyName(newmovie , event){
     this.namevalues = newmovie.split('');
  }

  onKeyDuration(newmovie){
    this.durvalues = newmovie.split('');
  }

  onKeyType(newmovie){
    this.typevalues = newmovie.split('');
  }

  
  addMovieTest(){
    if(this.addMovie()){
      this.warning = "Movie name already Exists";
    }else{
      this.movies.push({
        name: this.name,
        duration: this.duration,
        type: this.type
      })

    }
  }


  addMovie(){
    
    var hasMatch = false;
    for (var index = 0; index < this.movies.length; index++) {
      var element = this.movies[index];
      
      if(this.name == element.name){
           var hasMatch = true;
      }
    }
    return hasMatch;
  }

  removeMovie(movie){
    var index = this.movies.indexOf(movie);
    this.movies.splice(index,1);
  }

}
