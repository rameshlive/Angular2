import { Component, OnInit } from '@angular/core';
import { SortingPipe } from '../sorting.pipe';

@Component({
  selector: 'app-sorting',
  template:`

       <div class="row">
          <div class="col-sm-3">
              <div class="filterPanel header">
                    <span class="filterHeader"> Filters</span>
                    <a id="resetFilter" data-ga-log="event" data-ga-category="PropertyFilter" data-ga-action="reset-list-rent" onclick="resetFilters();" name="resetTab" href="#" class="pull-right"> <i class="icon-undo"></i>Reset</a>
              </div>
              <div class="filter-section">
                  <div class="filterPanel"  id="apartDiv" style="">
                      <span class="filterPanelHeader ">Apartment Type</span>
                      <div class="nbCheckbox btnFilter" *ngFor="let bedroom of bedrooms ">

                          <input type="checkbox" [(ngModel)]="bedroom.selected" (change)="onChange( bedroom, $event.target.checked)" id="{{ bedroom }}" class="fbsearch" value="{{bedroom}}" name="propType" data-name="propType" >
                          <label for="{{bedroom}}">
                          <span class="filterLabel"> {{ bedroom }} BHK </span>
                        </label>
                      </div>
                  </div> 
                  <div class="filterPanel">
                        <span class="filterPanelHeader ">Rent Range (per month)</span>
                        
                          Min<input type="text" value="1000" name=""/>
                          Max<input type="text" value="10000" name=""/>
                      
                  </div> 

              </div>
          </div>
          <div class="col-md-9">
                <div style="float:right;margin-bottom: 15px;">
                      <label> Filter By : </label>
                      <select class="form-control" [(ngModel)]="selectedItem" style="display:inline;width:auto">
                          <option *ngFor="let field of filterfields" [value]="field"> {{ field }}</option>
                      </select>
                      <button class="btn btn-primary"  (click)="order='asc'">Asc</button>
                      <button class="btn btn-primary"  (click)="order='desc'">Desc</button>
                </div> {{ matchingItem }}
                <div style="float:right;margin-bottom: 15px;margin-right:10px;">
                    <label> Sort By Bedrooms : </label>
                    <select class="form-control" [(ngModel)]="bedroomtype" style="display:inline;width:auto">
                          <option *ngFor="let bedroom of bedrooms" [value]="bedroom"> {{ bedroom }}  </option>
                    </select>
                    <b>BHK</b>
              </div> 

              <div class="row">
              <div  *ngFor="let data of ( datas | sortBy : [ selectedItem ,  order , bedroomtype ] ) let l = count let i = index" class="col-sm-3" [ngClass]="{'clearix': i % 4 == 0 }">
              <div class="division">
                  <img src="assets/images/{{ data.image }}.jpg" style="max-width:100%"/>
                      <div class="detail left">
                            <p class="property-type"> Type: <span> {{ data.type }} </span></p>
                            <p class="bhk truncate"> Configuration/Area  :<span> {{ data.bedrooms }} BHK </span> </p>
                            <p> Built-up Area :<span> {{ data.area }} </span> </p> 
                            <p> Bathroom :<span> {{ data.bathrooms }} </span> </p> 
                            <p class="price-tag truncate"> Price : <span> {{ data.price | currency:'INR':true:'4.3-3'}} </span></p>
                      </div>
              </div>
          </div>
              </div>

          </div>
          
          
        </div>
  `,
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {
  datas;
  filterfields;
  selectedItem;
  checkboxes;
  bedrooms;
  newArray = [ '1','2','3'];
  bedroomtype: string;
  matchingItem: number;
  count : number;
  order;
  error;
  constructor() {
    this.filterfields = [ 'Type', 'Price', 'Bedrooms' ,'Bathrooms' ,'Area' ];
    this.order = 'asc';
    this.selectedItem = 'Price';
    this.bedroomtype = 'all';
    this.newArray=[];
    this.datas = [
      {id: 1,type: "Condo",price: 220000,address: "213 Grove Street", description: "Excellent place, really nice view!",bedrooms: 2,bathrooms: 1,area: 921,image:"crib-1"},
      {id: 2,type: "House",price: 410500,address: "7823 Winding Way", description: "Beautiful home with lots of space for a large family.",bedrooms: 3,bathrooms: 2,area: 500,image:"crib-2"},
      {id: 3,type: "Duplex",price: 395000,address: "834 River Lane", description: "Great neighbourhood and lot's of nice green space.",bedrooms: 1,bathrooms: 3.5,area: 456,image:"crib-3"},
      {id: 4,type: "House",price: 755990,address: "7807 Forest Avenue", description: "Best house on the block!",bedrooms: 2,bathrooms: 2.5,area: 732,image:"crib-4"},
      {id: 5,type: "Condo",price: 210500,address: "1857 Andover Court", description: "Nice little condo with room to grow.",bedrooms: 4,bathrooms: 1.5,area: 961,image:"crib-5"},
      {id: 6,type: "House",price: 334900,address: "7398 East Avenue", description: "You'll love the view!!",bedrooms: 3,bathrooms: 4.5,area: 600,image:"crib-6"}
    ];

    this.bedrooms = ['1' ,'2', '3','4']

  }

  ngOnInit() {
  }

  onChange(btype: string , isChecked : boolean){

      if(isChecked){ 
          this.newArray.push(btype);
      }
  }

}
