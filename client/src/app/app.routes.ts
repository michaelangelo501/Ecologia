import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VenadoComponent } from './components/venado/venado.component';
import { BorregoComponent } from './components/borrego/borrego.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'berrendo', loadComponent: () => import('../app/components/berrendo/berrendo.component'),},
    {path: 'venado', component: VenadoComponent},
    {path: 'borrego', component: BorregoComponent},
];