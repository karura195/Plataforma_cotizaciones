import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './pages/login/login.page';
import { OlvideContrasenaPage } from './pages/olvide-contrasena/olvide-contrasena.page';
import { ContainerInsideComponent } from '../shared/components/container-inside/container-inside.component';


export const SEGURIDAD_COMPONENTS = [
	//UsuarioListadoPage,
	//UsuarioEditarPage,
	//ProductoEditarPage,
	//ServicioEditarPage
]

const routes: Routes = 
[
	{
		path:'',
		component: ContainerInsideComponent,
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