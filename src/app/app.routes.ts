
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { WeatherComponent } from './weather/weather.component';
import { Component , ModuleWithProviders} from '@angular/core';
import { MovielistComponent } from './movielist/movielist.component';
import { Example2Component } from './example2/example2.component';
import { Routes , RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PipesComponent } from './pipes/pipes.component';
import { SortingComponent } from './sorting/sorting.component';
import { ParentComponent } from './parent/parent.component';


export const routes: Routes = [
    { path : 'movies' , component : MovielistComponent },
    { path : 'TDforms' , component : Example2Component},
    { path : 'login' , component : LoginComponent},
    { path : 'signup' , component : RegisterComponent},
    { path : 'pipes' , component : PipesComponent},
    { path : 'sorting' , component : SortingComponent},
    { path : 'weather' , component : WeatherComponent },
    { path : 'employees' , component : EmployeesListComponent },
    { path : 'employee/:id' , component : EmployeeDetailComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent }
]


export const routing:ModuleWithProviders = RouterModule.forRoot(routes);