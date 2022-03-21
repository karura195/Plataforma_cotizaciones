import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-servicio-editar',
    templateUrl: './servicio-editar.page.html',
    styleUrls: ['./servicio-editar.page.scss']
})
export class ServicioEditarPage implements OnInit {

    servicio:any = { codigo: "", nombre: "", descripcion: "", categoriaId: 1, costo: "" };

    constructor() { }

    ngOnInit() 
    {

    }

    grabar():void {
		alert("Servicio grabado");
	}

    cancelar():void {
		alert("¿Desea cancelar?");
	}
}