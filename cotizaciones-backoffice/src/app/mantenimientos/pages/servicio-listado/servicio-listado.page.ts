import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { ServicioService } from '../../services/servicio.service';

export interface PeriodicElement {
	Nombre: string;
	codigo: number;
	Costo: number;
  }
  const ELEMENT_DATA: PeriodicElement[] = [
	{codigo: 1, Nombre: 'Alquiler de sillas', Costo: 6},
	{codigo: 2, Nombre: 'Bartender', Costo: 60},
	{codigo: 3, Nombre: 'Flores en techo', Costo: 300},
	{codigo: 4, Nombre: 'Pista de baile', Costo: 800},
  ];

@Component({
    selector: 'app-servicio-listado',
    templateUrl: './servicio-listado.page.html',
    styleUrls: ['./servicio-listado.page.scss']
})
export class ServicioListadoPage implements OnInit {

	displayedColumns: string[] = ['codigo', 'Nombre', 'Costo'];
	dataSource = ELEMENT_DATA;

	selectedRow: any = null;

	filtro: string = "";

    constructor(private servicioService: ServicioService, private router:Router) { }

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

	selectRow(event: any, item: any): void {
		this.selectedRow = item;
	}

	nuevo(): void {
		this.router.navigate(['/mantenimientos/servicio/editar/0']);
	}
	editar(): void {
		this.router.navigate(['/mantenimientos/servicio/editar/5']);
	}
	eliminar(): void {
		alert("¿Desea eliminar el servicio?");
	}
}