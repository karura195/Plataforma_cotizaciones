import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { SeguridadRoutingModule, SEGURIDAD_COMPONENTS } from "./seguridad-routing.module";
//import { UsuarioService } from './services/usuario.service';


@NgModule({
	imports: 
	[
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
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