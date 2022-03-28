import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { SeguridadRoutingModule, SEGURIDAD_COMPONENTS } from "./seguridad-routing.module";
//import { UsuarioService } from './services/usuario.service';


@NgModule({
	imports: 
	[
		CommonModule,
		FormsModule,
		SharedModule,
		SeguridadRoutingModule
	],
	providers:[
		//UsuarioService
	],
	declarations: 
	[
		SEGURIDAD_COMPONENTS
	]
})
export class SeguridadModule { }