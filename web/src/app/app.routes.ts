import { Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { BuildingFormComponent } from './components/forms/building/building.form.component';



export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'help', component:HelpComponent},
    {path: 'about', component:AboutComponent},
    {path: 'map', component:MapComponent},
    {path: 'form-building', component:BuildingFormComponent},
];
