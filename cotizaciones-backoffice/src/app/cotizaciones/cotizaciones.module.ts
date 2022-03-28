import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CotizacionesRoutingModule, COTIZACIONES_COMPONENTS } from "./cotizaciones-routing.module";
//import { UsuarioService } from './services/usuario.service';


@NgModule({
	imports: 
	[
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		CotizacionesRoutingModule
	],
	providers:[
		//UsuarioService
	],
	declarations: 
	[
		COTIZACIONES_COMPONENTS
	]
})
export class CotizacionesModule { }