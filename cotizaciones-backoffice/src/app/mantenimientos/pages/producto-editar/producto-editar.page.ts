import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-producto-editar',
    templateUrl: './producto-editar.page.html',
    styleUrls: ['./producto-editar.page.scss']
})
export class ProductoEditarPage implements OnInit {

    producto:any = { codigo: "", nombre: "", descripcion: "", medida: "", categoriaId: 1, costo: "" };

    constructor() { }

    ngOnInit() 
    {

    }

    grabar():void {
		alert("Producto grabado");
	}

    cancelar():void {
		alert("¿Desea cancelar?");
	}
}