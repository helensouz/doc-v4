import { Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';


export const routes: Routes = [

    {pathMatch: 'full', path: 'header', component: HeaderComponent}
];
