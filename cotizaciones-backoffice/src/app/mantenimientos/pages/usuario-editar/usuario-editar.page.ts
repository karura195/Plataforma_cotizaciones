import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-usuario-editar',
    templateUrl: './usuario-editar.page.html',
    styleUrls: ['./usuario-editar.page.scss']
})
export class UsuarioEditarPage implements OnInit {

	usuario:any = { correo: "", nombre: "", apellidos: "", rolId: 1, estadoId: 1 };

    constructor() { }

    ngOnInit() 
    {

    }

	grabar():void {
		alert("1");
	}
}