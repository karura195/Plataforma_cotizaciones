import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { MantenimientosRoutingModule, MANTENIMIENTOS_COMPONENTS } from "./mantenimientos-routing.module";
import { UsuarioService } from './services/usuario.service';


@NgModule({
    imports: 
    [
        CommonModule,
		FormsModule,
		SharedModule,
        MantenimientosRoutingModule
    ],
    providers:[
        UsuarioService
    ],
    declarations: 
    [
        MANTENIMIENTOS_COMPONENTS
    ]
})
export class MantenimientosModule { }