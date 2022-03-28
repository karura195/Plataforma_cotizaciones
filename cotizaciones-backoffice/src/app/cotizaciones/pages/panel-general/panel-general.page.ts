import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

//import { UsuarioService } from '../../services/usuario.service';


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
    selector: 'app-cotizacion-panel-general',
    templateUrl: './panel-general.page.html',
    styleUrls: ['./panel-general.page.scss']
})
export class PanelGeneralPage implements OnInit {

	displayedColumns: string[] = ['position', 'Nombre', 'Correo', 'Rol', 'Estado'];
	dataSource = ELEMENT_DATA;

	selectedRow: any = null;
	
	filtro: string = "";

    constructor(private router:Router) { }

    ngOnInit() 
    {

    }

	buscar(): void {

		/*this.usuarioService.listado(this.filtro).subscribe(
			(response) => {
				if (response != null && response.ok && response.data) {
					this.dataSource = response.data;
				}
			},
			(error) => {
				alert("Error al obtener los datos");
			}
		)*/
	}

	selectRow(event: any, item: any): void {
		this.selectedRow = item;
	}

	solicitud(): void {
		this.router.navigate(['/cotizaciones/cotizacion-inicial']);
	}
	cotizacion(): void {
		this.router.navigate(['/cotizaciones/cotizacion']);
	}
	eliminar(): void {
		Swal.fire({
			icon: 'error',
			title: "ERROR",
			text: "Error al eliminar la cotización. No se puede eliminar una cotizacion en proceso."
		});
	}
}