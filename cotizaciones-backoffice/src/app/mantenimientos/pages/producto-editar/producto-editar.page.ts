import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { ProductoService } from '../../services/producto.service';

@Component({
    selector: 'app-producto-editar',
    templateUrl: './producto-editar.page.html',
    styleUrls: ['./producto-editar.page.scss']
})
export class ProductoEditarPage implements OnInit {

    producto:any = { codigo: "", nombre: "", descripcion: "", medida: "", categoriaId: 1, costo: "" };

    constructor(private productoService:ProductoService, private router:Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() 
    {

    }

    grabar():void {
		Swal.fire({
			icon: 'success',
			title: "OK",
			text: "Grabacion correcta.",

		}).then((result) => {
			this.router.navigate(['/mantenimientos/producto/listado']);
		});
		return;

		this.productoService.grabar(this.producto).subscribe(
			(response) => {
				if (response && response.ok && response.data) {
					Swal.fire({
						icon: 'success',
						title: "OK",
						text: "Grabacion correcta."
					});
				} else {
					Swal.fire({
						icon: 'error',
						title: "ERROR",
						text: "Error al grabar."
					});
				}
			}, 
			(error) => {
				Swal.fire({
					icon: 'error',
					title: "ERROR",
					text: "Error al grabar."
				});
			}
		);
	}

    cancelar():void {
		//alert("¿Desea cancelar?");
		this.router.navigate(['/mantenimientos/producto/listado']);
	}
}