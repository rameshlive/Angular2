import { element } from 'protractor';
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

                   <div class="filterPanel">
                        <span class="filterPanelHeader ">Location</span>
                        <input list="locations" class="locations" [(ngModel)]="area">
                        
                        <datalist id="locations">
                          <option  *ngFor="let data of locations" [value]="data">{{ data }}
                        </datalist>

                        <p>{{ location }} </p>
                   </div> 


                  <div class="filterPanel"  id="apartDiv" style="">
                      <span class="filterPanelHeader ">Apartment Type</span>
                      <div class="nbCheckbox btnFilter" *ngFor="let bedroom of bedrooms ">

                          <input type="checkbox" [(ngModel)]="bedroom.selected" (change)="onChange( bedroom, $event.target.checked)" id="{{ bedroom }}" class="fbsearch" value="{{bedroom}}" name="propType" data-name="propType" >
                          <label for="{{bedroom}}">
                          <span class="filterLabel"> {{ bedroom }} BHK </span>
                        </label>
                      </div>
                  </div> 

                  <div class="filterPanel"  id="apartDiv" style="">
                        <span class="filterPanelHeader ">Owner Type</span>
                        <div *ngFor="let option of locations">
                            <label>
                                <input type="checkbox"
                                        name="options"
                                        value="{{option}}"
                                        [(ngModel)]="option.checked"/>
                                {{option}}
                            </label>
                        </div>
                  </div>

                  <div class="filterPanel">
                        <span class="filterPanelHeader ">Price</span>
                        <div class="range">
                            <span class="start">1k</span><span class="end">25k</span>
                            <input type="range" (input)="rangevalue()" class="demo" min="1000"  step="1000" value="25000" max="25000" [(ngModel)]="sliderValue" />
                            
                        </div>
        
                        <p class="changevalue">{{ newValue }} k</p>
                      
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
              <div  *ngFor="let data of ( datas | sortBy : [ selectedItem ,  order , bedroomtype , sliderValue ] ) let l = count let i = index" class="col-sm-12" [ngClass]="{'clearix': i % 4 == 0 }">
              <div class="division">
                  <img src="assets/images/{{ data.image }}.jpg"/>
                      <div class="detail left">
                            <p class="bhk truncate"><span> {{ data.bedrooms }} BHK APARTMENT</span> <span class="area"> {{ data.location }}</span></p>
                            <p> Built Up Area :<span> {{ data.sqft }} sq.ft</span> </p> 
                            <p class="price-tag truncate"> Price : <span> {{ data.price | currency:'INR':true:'4.0-3'}} </span></p>
                            <!--<p class="property-type"> Type: <span> {{ data.type }} </span></p>-->
                            <!--<p> Bathroom :<span> {{ data.bathrooms }} </span> </p> -->

                            <div class="avatar-container">
                                <img src="assets/images/users/{{ data['owner']['image']}}.jpg"/>
                            </div>
                            <div class="user-info">
                                <div class="name">
                                    <span>{{ data['owner']['name']}}</span>
                                </div>
                                <div class="type">{{ data['owner']['type']}}</div>
                            </div>
                            
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
  sliderValue : number = 25000;
  newValue;
  location;
  area;
  locations:any = [];
  constructor() {
    this.filterfields = [ 'Type', 'Price', 'Bedrooms' ,'Bathrooms' ,'sqft' ];
    this.order = 'asc';
    this.selectedItem = 'Price';
    this.bedroomtype = 'all';
    this.newArray=[];
    this.datas = [
      {
          id: 1,
          type: "Condo",
          price: 6000,
          address: "213 Grove Street",
          description: "Excellent place, really nice view!",
          bedrooms: 2,
          bathrooms: 1,
          owner:{
                type:"Owner",
                name:"Ramesh",
                image:"image-1"

            },
          sqft: 921,
          location:"Chrompet",
          image:"crib-1"
         },
      {   
          id: 2,
          type: "House",
          price: 10000,
          address: "7823 Winding Way",
          description: "Beautiful home with lots of space for a large family.",
          bedrooms: 3,
          bathrooms: 2,
          owner:{
                type:"Owner",
                name:"Raj",
                image:"image-2"
            },
          sqft: 500,
          location:"Chrompet",
          image:"crib-2"
        },
      {     
          id: 3,
          type: "Duplex",
          price: 12000,address: "834 River Lane",
          description: "Great neighbourhood and lot's of nice green space.",
          bedrooms: 1,
          bathrooms: 3.5,
          owner:{
            type:"Owner",
            name:"Raj",
            image:"image-3"
        },
          sqft: 456,
          location:"KK Nagar",
          image:"crib-3"
        },
      {     
          id: 4,
          type: "House",
          price: 8500,
          address: "7807 Forest Avenue",
          description: "Best house on the block!",
          bedrooms: 2,
          bathrooms: 2.5,
          owner:{
                type:"Developer",
                name:"DAC Promoters",
                image:"image-4"
            },
          sqft: 732,
          location:"Ashok Pillar",
          image:"crib-4"
        },
      {     
          id: 5,
          type: "Condo",
          price: 9000,
          address: "1857 Andover Court",
          description: "Nice little condo with room to grow.",
          bedrooms: 4,
          bathrooms: 1.5,
          owner:{
            type:"Owner",
            name:"Raghu",
            image:"image-5"
          },
          sqft: 961,
          location:"Koyembedu",
          image:"crib-5"
        },
      {     
          id: 6,
          type: "House",
          price: 22000,
          address: "7398 East Avenue",
          description: "You'll love the view!!",
          bedrooms: 3,
          bathrooms: 4.5,
          owner:{
                type:"Agent",
                name:"Anand",
                image:"image-6"
            },
          sqft: 600,
          location:"Vadapalani",
          image:"crib-6"
        },
      {    
          id: 7,
          type: "Condo",
          price: 6000,
          address: "213 Grove Street",
          description: "Excellent place, really nice view!",
          bedrooms: 2,
          bathrooms: 1,
          owner:{
                type:"Developer",
                name:"SB Promoters",
                image:"image-7"
            },
          sqft: 800,
          location:"Vadapalani",
          image:"crib-3"},
      {     
          id: 8,
          type: "House",
          price: 8000,
          address: "7823 Winding Way",
          description: "Beautiful home with lots of space for a large family.",
          bedrooms: 3,
          bathrooms: 2,
          owner:{
                type:"Owner",
                name:"Bala",
                image:"image-8"
          },
          sqft: 1200,
          location:"KK Nagar",
          image:"crib-1"
        },
      {   
          id: 9,
          type: "Duplex",
          price: 20000,
          address: "834 River Lane",
          description: "Great neighbourhood and lot's of nice green space.",
          bedrooms: 1,
          bathrooms: 3.5,
          owner:{
                type:"Agent",
                name:"Kumar",
                image:"image-9"
            },
          sqft: 350,
          location:"Ashok Pillar",
          image:"crib-4"},
      {   
          id: 10,
          type: "House",
          price:16000,
          address: "7807 Forest Avenue",
          description: "Best house on the block!",
          bedrooms: 3,
          bathrooms:3,
          owner:{
                type:"Housing Select Agent",
                name:"Priya",
                image:"image-10"
            },
          sqft: 600,
          location:"Chrompet",
          image:"crib-6"
        },
      {   
          id: 11,
          type: "Condo",
          price: 13000,
          address: "1857 Andover Court",
          description: "Nice little condo with room to grow.",
          bedrooms: 2,
          bathrooms: 1.5,
          owner:{
                type:"Owner",
                name:"Guru",
                image:"image-11"
            },
          sqft: 575,
          location:"Chrompet",
          image:"crib-2"
        },
      {    
          id: 12,
          type: "House",
          price: 19000,
          address: "7398 East Avenue",
          description: "You'll love the view!!",
          bedrooms: 3,
          bathrooms: 4.5,
          owner:{
                type:"Housing Select Agent",
                name:"Siva",
                image:"image-12"
            },
          sqft: 1100,
          location:"Chrompet",
          image:"crib-5"}
    ];

    this.bedrooms = ['1' ,'2', '3','4']

  }

  ngOnInit() {
        this.rangevalue();

        this.getLocations();
  }

  onChange(btype: string , isChecked : boolean){

      if(isChecked){ 
          this.newArray.push(btype);
      }
  }

   getLocations(){

            var filler = [];
            for(var i=0; i < this.datas.length; i++){
                filler.push( this.datas[i].location); 
            }
            return this.locations = [ "chromepet" , "Ashok pillar" , " vadapalani"];
    }


  rangevalue(){
     this.newValue = this.sliderValue.toString();
     console.log(this.newValue);
     this.newValue = this.newValue.substring(0, this.newValue.length - 3);
     
  }

}
