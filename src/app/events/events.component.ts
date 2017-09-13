import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HighlightDirective } from '../highlight.directive';
=======

>>>>>>> 3c1f12843afa0c89d5d96b6bfaaa096cce9565f7
@Component({
  selector: 'app-events',
  template:`

      Enter hero name : <input type="text" #newhero  
          (keyup.enter)="addHero(newhero.value)"
          (blur) ="addHero(newhero.value)" />
      <button type="button" (click)="addHero(newhero.value)">Add</button>

      <ul>
<<<<<<< HEAD
          <li *ngFor="let hero of heroes" appHighlight>{{ hero }}</li>
=======
          <li *ngFor="let hero of heroes">{{ hero }}</li>
>>>>>>> 3c1f12843afa0c89d5d96b6bfaaa096cce9565f7
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
