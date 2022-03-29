import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

//import { UsuarioService } from '../../services/usuario.service';


export interface PeriodicElement {
	Cliente: string;
	position: number;
	Fecha: string;
	Estado: string;
  }
  const ELEMENT_DATA: PeriodicElement[] = [
	{position: 1, Cliente: 'Juan Perez', Fecha: '06/08/22', Estado: 'Pendiente'},
	{position: 2, Cliente: 'Lita Reyna', Fecha: '18/08/22', Estado: 'Pendiente'},
	{position: 3, Cliente: 'Placido Domingo', Fecha: '04/09/22', Estado: 'Aprobado'},
	{position: 4, Cliente: 'El pepe', Fecha: '23/09/22', Estado: 'Rechazado'},
	{position: 5, Cliente: 'Maria Ochoa', Fecha: '12/03/22', Estado: 'Enviado'},
  ];

@Component({
    selector: 'app-cotizacion-panel-general',
    templateUrl: './panel-general.page.html',
    styleUrls: ['./panel-general.page.scss']
})
export class PanelGeneralPage implements OnInit {

	displayedColumns: string[] = ['position', 'Cliente', 'Fecha', 'Estado'];
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