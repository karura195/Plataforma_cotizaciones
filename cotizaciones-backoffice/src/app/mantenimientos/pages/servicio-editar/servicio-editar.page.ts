import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { ServicioService } from '../../services/servicio.service';

@Component({
    selector: 'app-servicio-editar',
    templateUrl: './servicio-editar.page.html',
    styleUrls: ['./servicio-editar.page.scss']
})
export class ServicioEditarPage implements OnInit {

    servicio:any = { codigo: "", nombre: "", descripcion: "", categoriaId: 1, costo: "" };

    constructor(private servicioService:ServicioService, private router:Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() 
    {

    }

    grabar():void {Swal.fire({
			icon: 'success',
			title: "OK",
			text: "Grabacion correcta.",

		}).then((result) => {
			this.router.navigate(['/mantenimientos/servicio/listado']);
		});
		return;

		this.servicioService.grabar(this.servicio).subscribe(
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
		this.router.navigate(['/mantenimientos/servicio/listado']);
	}
}