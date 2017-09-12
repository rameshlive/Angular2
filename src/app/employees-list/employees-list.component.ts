
import { Http , Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-employees-list',
  template:`
     
      <table class="table">
          <tr *ngFor="let emp of employees" style="cursor:pointer" [class.selected] ="emp.id == currentID "(click)="onSelect(emp.id)">
            <td> {{ emp.id  }}</td>
            <td> {{ emp.name  }}</td>
            <td> {{ emp.username  }}</td>
            <td> {{ emp.email  }}</td>
            <td> {{ emp.phone  }}</td>
            <td> {{ emp.website  }}</td>
          </tr>
      </table>
      {{ status }}

    `,
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees;
  status;
  currentID;
  constructor(
          private _http: Http,
          private _router: Router,
          private _route : ActivatedRoute
          ) { }

  ngOnInit() {

    this._route.params.subscribe( 
      (params:Params) => {
        this.currentID = params['id']
      }
  )
    let URL ="assets/employees.json";

    this._http.get(URL)
              .subscribe(
                data => this.employees = data.json(),
                error => this.status = error
              );
  }

  onSelect(empId){
    
      this._router.navigate(['/employee' , empId ]);
    
  }

}
