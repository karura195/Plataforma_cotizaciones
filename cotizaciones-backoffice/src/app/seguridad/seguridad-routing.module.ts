import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './pages/login/login.page';
import { OlvideContrasenaPage } from './pages/olvide-contrasena/olvide-contrasena.page';
import { ContainerOutsideComponent } from '../shared/components/container-outside/container-outside.component';
import { LoginFormComponent } from './components/login-form/login-form.component';


export const SEGURIDAD_COMPONENTS = [
	LoginPage,
	OlvideContrasenaPage,

	LoginFormComponent
]

const routes: Routes = 
[
	{
		path:'',
		component: ContainerOutsideComponent,
		children:
		[
			{
				path:'login',
				component: LoginPage
			},
			{
				path:'olvide-contrasena',
				component: OlvideContrasenaPage
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class SeguridadRoutingModule { }