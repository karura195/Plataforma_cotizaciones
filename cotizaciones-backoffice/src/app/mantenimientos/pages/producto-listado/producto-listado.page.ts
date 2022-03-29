import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { ProductoService } from '../../services/producto.service';

export interface PeriodicElement {
	Nombre: string;
	codigo: number;
	Unidad: string;
	Rendimiento: string;
	Costo: number;
  }
  const ELEMENT_DATA: PeriodicElement[] = [
	{codigo: 1, Nombre: 'Champagna', Unidad: 'Botella', Rendimiento: '6 vasos', Costo: 45},
	{codigo: 2, Nombre: 'Gaseosa', Unidad: 'Botella', Rendimiento: '8 vasos', Costo: 5},
	{codigo: 3, Nombre: 'Bocadito', Unidad: 'Fuente', Rendimiento: '50', Costo: 30},
	{codigo: 4, Nombre: 'Segundo de cerdo', Unidad: 'Plato', Rendimiento: '1', Costo: 12},
  ];

@Component({
    selector: 'app-producto-listado',
    templateUrl: './producto-listado.page.html',
    styleUrls: ['./producto-listado.page.scss']
})
export class ProductoListadoPage implements OnInit {

	displayedColumns: string[] = ['codigo', 'Nombre', 'Unidad', 'Rendimiento', 'Costo'];
	dataSource = ELEMENT_DATA;

	selectedRow: any = null;

	filtro: string = "";

    constructor(private productoService: ProductoService, private router:Router) { }

    ngOnInit() 
    {

    }

	buscar(): void {

		this.productoService.listado(this.filtro).subscribe(
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
		this.router.navigate(['/mantenimientos/producto/editar/0']);
	}
	editar(): void {
		this.router.navigate(['/mantenimientos/producto/editar/5']);
	}
	eliminar(): void {
		
	}
}