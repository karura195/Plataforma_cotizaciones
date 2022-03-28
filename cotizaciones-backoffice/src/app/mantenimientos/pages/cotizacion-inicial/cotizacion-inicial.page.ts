import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-cotizacion-inicial',
    templateUrl: './cotizacion-inicial.page.html',
    styleUrls: ['./cotizacion-inicial.page.scss']
})
export class CotizacionInicialPage implements OnInit {

	usuario:any = { correo: "", nombre: "", apellidos: "", rolId: 1, estadoId: 1 };

    constructor() { }


    ngOnInit() 
    {

    }

	grabar():void {

	}

    cancelar():void {
		alert("¿Desea cancelar?");
	}
}