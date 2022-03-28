import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { MantenimientosRoutingModule, MANTENIMIENTOS_COMPONENTS } from "./mantenimientos-routing.module";
import { UsuarioService } from './services/usuario.service';
import { ServicioService } from './services/servicio.service';
import { ProductoService } from './services/producto.service';


@NgModule({
	imports: 
	[
		CommonModule,
		FormsModule,
		SharedModule,
		MantenimientosRoutingModule
	],
	providers:[
		UsuarioService,
		ProductoService,
		ServicioService
	],
	declarations: 
	[
		MANTENIMIENTOS_COMPONENTS
	]
})
export class MantenimientosModule { }