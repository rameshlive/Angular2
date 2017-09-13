import { SharedService } from './shared.service';
import { WeatherService } from './weather.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,FormGroup }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MovielistComponent } from './movielist/movielist.component';
import { Example2Component } from './example2/example2.component';
import { routing } from './app.routes';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PipesComponent } from './pipes/pipes.component';
import { CapitalizePipe } from './capitalize.pipe';
import { FilterPipe } from './filter.pipe';
import { SortingComponent } from './sorting/sorting.component';

import { SortingPipe } from './sorting.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { WeatherComponent } from './weather/weather.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EventsComponent } from './events/events.component';




@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    Example2Component,
    PagenotfoundComponent,
    LoginComponent,
    RegisterComponent,
    PipesComponent,
    CapitalizePipe,
    FilterPipe,
    SortingComponent,
    SortingPipe,
    ParentComponent,
    ChildComponent,
    WeatherComponent,
    EmployeesListComponent,
    EmployeeDetailComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

  ],
  providers: [ WeatherService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
