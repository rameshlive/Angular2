import { Component, OnInit } from '@angular/core';
import { CapitalizePipe } from '../capitalize.pipe';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
 
  
})
export class PipesComponent implements OnInit {
  movies;
  filtertext;
  constructor() { 
    this.filtertext ='';
  }

  ngOnInit() {
     this.movies = [
      { name: 'Raees', color:'Red' },
      { name: 'Kabil', color:'black' },
      { name: 'Rangoon', color:'Green' },
      { name: 'Tubelight', color:'blue' },
      { name: 'jagga', color:'orange' },
      { name: 'Dangal', color:'blue' },
      { name: 'Airlift', color:'red' },
      { name: 'Neerja', color:'grey' },
      { name: 'Fan', color:'pink' },
      { name: 'Sultan', color:'green'},
    ]
    
  }

}
