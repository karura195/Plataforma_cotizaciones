import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
	selector: 'app-cotizacion',
	templateUrl: './cotizacion.page.html',
	styleUrls: ['./cotizacion.page.scss']
})
export class CotizacionPage implements OnInit {

	usuario:any = { correo: "", nombre: "", apellidos: "", rolId: 1, estadoId: 1 };

	constructor(private router:Router) { }


	ngOnInit() 
	{

	}

	grabar():void {

		Swal.fire({
			icon: 'success',
			title: "OK",
			text: "Grabacion correcta.",

		}).then((result) => {
			this.router.navigate(['/cotizaciones/panel-general']);
		});
		return;

	}

	cancelar():void {
		this.router.navigate(['/cotizaciones/panel-general']);
	}
}