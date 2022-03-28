import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerInsideComponent } from '../shared/components/container-inside/container-inside.component';
import { HomePage } from './pages/home.page';




export const GENERAL_COMPONENTS = [
	HomePage
]

const routes: Routes = 
[
	{
		path:'',
		component: ContainerInsideComponent,
		children:
		[
			{
				path:'home',
				component: HomePage
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class GeneralRoutingModule { }