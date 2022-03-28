import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioListadoPage } from './pages/usuario-listado/usuario-listado.page';
import { UsuarioEditarPage } from './pages/usuario-editar/usuario-editar.page';
import { ProductoEditarPage } from './pages/producto-editar/producto-editar.page';
import { ServicioEditarPage } from './pages/servicio-editar/servicio-editar.page';
import { ContainerInsideComponent } from '../shared/components/container-inside/container-inside.component';
import { ProductoListadoPage } from './pages/producto-listado/producto-listado.page';
import { ServicioListadoPage } from './pages/servicio-listado/servicio-listado.page';


export const MANTENIMIENTOS_COMPONENTS = [
	UsuarioListadoPage,
	UsuarioEditarPage,
	ProductoListadoPage,
	ProductoEditarPage,
	ServicioEditarPage,
	ServicioListadoPage
]

const routes: Routes = 
[
	{
		path:'mantenimientos',
		component: ContainerInsideComponent,
		children:
		[
			{
				path:'usuario/listado',
				component: UsuarioListadoPage
			},
			{
				path:'usuario/editar/:id',
				component: UsuarioEditarPage
			},
			{
				path:'producto/listado',
				component: ProductoListadoPage
			},
			{
				path:'producto/editar/:id',
				component: ProductoEditarPage
			},
			{
				path:'servicio/listado',
				component: ServicioListadoPage
			},
			{
				path:'servicio/editar/:id',
				component: ServicioEditarPage
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	declarations: []
})
export class MantenimientosRoutingModule { }