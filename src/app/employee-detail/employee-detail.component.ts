import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  template:`
  <div *ngIf="status"> <h3> {{ status}} </h3> </div>
  <div *ngIf="statusMsg"> <h3> {{ statusMsg }} </h3> </div>
  <div *ngFor="let emp of employees">
        <div class="col-md-6">
            <p> EMP Code :<b> {{ emp.id }} </b></p>
            <p> Name : <b> {{ emp.name }} </b></p>
            <p> Username : <b> {{ emp.username }}</b></p>
            <p> Email : <b> {{ emp.email }}</b> </p>
            <p> Phone :<b> {{ emp.phone }} </b></p>
            <p> Wesite : <b> {{ emp.website }} </b></p>
            <p> Company : <b> {{ emp.company.name }}</b></p>
            
        </div>

        <div class="col-md-6">
            Address :
            <ul style="list-style-type:none">
                <li> Street : <b> {{ emp.address.street }} </b></li>
                <li> suite : <b> {{ emp.address.suite }} </b></li>
                <li> City : <b> {{ emp.address.city }} </b></li>
                <li> Zipcode : <b> {{ emp.address.zipcode }} </b></li>
            </ul>
        </div>
  </div>
  <div style="clear:both"></div>
  <div *ngIf="!status" class="col-md-12 text-right">
    <button class="btn btn-success" [disabled] ="statusMsg" (click)="goback()">Go Back</button>
    <button class="btn btn-success" [disabled] ="statusMsg" (click)="goPrevious()">Previous</button>
    <button class="btn btn-primary" [disabled] ="statusMsg" (click)="goNext()">Next</button>
  </div>  
  `  
    ,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employees = [];
  employees1;
  status;
  currentEmployee;
  currentID;
  totalCount;
  statusMsg;
  constructor(
          private _http:Http,
          private _route : ActivatedRoute,
          private _router : Router ) { }

  ngOnInit() {
            this._route.params.subscribe( 
                (params:Params) => {
                  this.currentID = params['id']
                }
            )
   
           this.getEmployees();
        
      } 
     getEmployees(){
        let URL ="assets/employees.json";
        this._http.get(URL)
        .map((response: Response) => response.json())
        .subscribe(
            (data) => {
                this.employees = data
                this.totalCount = this.employees.length
                this.employees = this.employees.filter(x => x.id == this.currentID)
                if(this.employees.length == 0){
                  this.statusMsg ="Records Not Found";
                }
            },
            error => this.status = error
        );
     }
     goPrevious(){
          let previousId = parseInt(this.currentID) - 1 ;
          if( previousId > 0 ){
            this.getEmployees();
            this._router.navigate(['/employee', previousId])
          }
          
     } 
     goNext(){
          let nextId = parseInt(this.currentID) + 1 ;
          
          if( nextId <= this.totalCount ){
            this.getEmployees();
            this._router.navigate(['/employee', nextId] )
          }
    
    }
    goback(){
      this._router.navigate(['/employees',{ "id": this.currentID }]) 
    } 
}
    

    
  
    
  

 



