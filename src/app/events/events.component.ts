import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
@Component({
  selector: 'app-events',
  template:`

      Enter hero name : <input type="text" #newhero  
          (keyup.enter)="addHero(newhero.value)"
          (blur) ="addHero(newhero.value)" />
      <button type="button" (click)="addHero(newhero.value)">Add</button>

      <ul>
          <li *ngFor="let hero of heroes" appHighlight>{{ hero }}</li>
      </ul>

  `,
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  values = '';
  heroes: string[] =[];
  constructor() {

      this.heroes = ['Winstorm','Bombasto', 'Magenta' , 'Tornato']

   }

  ngOnInit() {
  }

  onKeyUp(event){
    this.values += event.key + ' |'
  }

  addHero(newhero){

      if(newhero){
        this.heroes.push(newhero);
      }

  }

}
