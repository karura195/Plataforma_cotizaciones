import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../services/usuario.service';

export interface PeriodicElement {
	name: string;
	position: number;
	weight: number;
	symbol: string;
  }
  const ELEMENT_DATA: PeriodicElement[] = [
	{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
	{position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
	{position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
	{position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
	{position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
	{position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
	{position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
	{position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
	{position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
	{position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

@Component({
    selector: 'app-usuario-listado',
    templateUrl: './usuario-listado.page.html',
    styleUrls: ['./usuario-listado.page.scss']
})
export class UsuarioListadoPage implements OnInit {

	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
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