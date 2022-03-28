import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../services/usuario.service';

export interface PeriodicElement {
	Nombre: string;
	position: number;
	Correo: string;
	Rol: string;
	Estado: string;
  }
  const ELEMENT_DATA: PeriodicElement[] = [
	{position: 1, Nombre: 'Juan Perez', Correo: 'juan.perez@clubhotelcusco.com', Rol: 'Recepcionista', Estado: 'Activo'},
	{position: 2, Nombre: 'Lita Reyna', Correo: 'lita.reyna@clubhotelcusco.com', Rol: 'Recepcionista', Estado: 'Activo'},
	{position: 3, Nombre: 'Placido Domingo', Correo: 'placido.domingo@clubhotelcusco.com', Rol: 'Recepcionista', Estado: 'Activo'},
	{position: 4, Nombre: 'El pepe', Correo: 'el.pepe@clubhotelcusco.com', Rol: 'Recepcionista', Estado: 'De baja'},
	{position: 5, Nombre: 'Maria Ochoa', Correo: 'mari.ochoa@clubhotelcusco.com', Rol: 'Recepcionista', Estado: 'Activo'},
  ];

@Component({
    selector: 'app-usuario-listado',
    templateUrl: './usuario-listado.page.html',
    styleUrls: ['./usuario-listado.page.scss']
})
export class UsuarioListadoPage implements OnInit {

	displayedColumns: string[] = ['position', 'Nombre', 'Correo', 'Rol', 'Estado'];
	dataSource = ELEMENT_DATA;

	filtro: string = "";

    constructor(private usuarioService: UsuarioService) { }

    ngOnInit() 
    {

    }

	buscar(): void {

		this.usuarioService.listado(this.filtro).subscribe(
			(response) => {
				if (response != null && response.ok && response.data) {
					this.dataSource = response.data;
				}
			},
			(error) => {
				alert("Error al obtener los datos");
			}
		)
	}

	nuevo(): void {

	}
	editar(): void {
		
	}
	eliminar(): void {
		
	}
}