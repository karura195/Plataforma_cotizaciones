import { Component, OnInit } from '@angular/core';

import { ServicioService } from '../../services/servicio.service';

export interface PeriodicElement {
	Nombre: string;
	codigo: number;
	Unidad: string;
	Costo: number;
  }
  const ELEMENT_DATA: PeriodicElement[] = [
	{codigo: 501, Nombre: 'Alquiler terrazas', Unidad: 'Dia', Costo: 650},
	{codigo: 502, Nombre: 'Alquiler Coche', Unidad: 'Dia', Costo: 350},
	{codigo: 503, Nombre: 'Alquiler Equipo musical', Unidad: 'Dia', Costo: 500},
	{codigo: 504, Nombre: 'Alquiler Luces discoteca', Unidad: 'Dia', Costo: 350},
	{codigo: 505, Nombre: 'Alquiler Laptop', Unidad: 'Dia', Costo: 100},
	{codigo: 506, Nombre: 'Bartender', Unidad: 'Jornada', Costo: 80},
	{codigo: 507, Nombre: 'Cantante', Unidad: 'Hora', Costo: 300},
	{codigo: 508, Nombre: 'DJ', Unidad: 'Jornada', Costo: 350},
	{codigo: 509, Nombre: 'Escenario Hotel', Unidad: 'Dia', Costo: 800},
	{codigo: 510, Nombre: 'Maestro de ceremonias', Unidad: 'Dia', Costo: 400},
  ];

@Component({
	selector: 'app-servicio-listado',
	templateUrl: './servicio-listado.page.html',
	styleUrls: ['./servicio-listado.page.scss']
})
export class ServicioListadoPage implements OnInit {

	displayedColumns: string[] = ['codigo', 'Nombre', 'Unidad', 'Costo'];
	dataSource = ELEMENT_DATA;

	filtro: string = "";

	constructor(private servicioService: ServicioService) { }

	ngOnInit() 
	{

	}

	buscar(): void {

		this.servicioService.listado(this.filtro).subscribe(
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