import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { GeneralRoutingModule, GENERAL_COMPONENTS } from "./general-routing.module";
//import { UsuarioService } from './services/usuario.service';


@NgModule({
	imports: 
	[
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		GeneralRoutingModule
	],
	providers:[
		//UsuarioService
	],
	declarations: 
	[
		GENERAL_COMPONENTS
	]
})
export class GeneralModule { }