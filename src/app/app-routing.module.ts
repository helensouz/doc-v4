import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';

  const routes: Routes = [
    { pathMatch: 'full',
		path: '/header',
		component: HeaderComponent
	},
];


@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
	exports: [RouterModule]
})

export class AppRouting {}