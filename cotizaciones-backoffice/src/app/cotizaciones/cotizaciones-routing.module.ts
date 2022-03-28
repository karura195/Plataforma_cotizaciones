import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerInsideComponent } from '../shared/components/container-inside/container-inside.component';
import { CotizacionInicialPage } from './pages/cotizacion-inicial/cotizacion-inicial.page';
import { CotizacionPage } from './pages/cotizacion/cotizacion.page';
import { PanelGeneralPage } from './pages/panel-general/panel-general.page';


export const COTIZACIONES_COMPONENTS = [
	PanelGeneralPage,
	CotizacionInicialPage,
	CotizacionPage
]

const routes: Routes = 
[
	{
		path:'cotizaciones',
		component: ContainerInsideComponent,
		children:
		[
			{
				path:'panel-general',
				component: PanelGeneralPage
			},
			{
				path:'cotizacion-inicial',
				component: CotizacionInicialPage
			},
			{
				path:'cotizacion',
				component: CotizacionPage
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class CotizacionesRoutingModule { }