import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';

import { MantenimientosRoutingModule, MANTENIMIENTOS_COMPONENTS } from "./mantenimientos-routing.module";


@NgModule({
    imports: 
    [
        CommonModule,
        MantenimientosRoutingModule
    ],
    providers:[
        //SecurityService
    ],
    declarations: 
    [
        MANTENIMIENTOS_COMPONENTS
    ]
})
export class MantenimientosModule { }