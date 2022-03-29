import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
	selector: 'app-cotizacion-inicial',
	templateUrl: './cotizacion-inicial.page.html',
	styleUrls: ['./cotizacion-inicial.page.scss']
})
export class CotizacionInicialPage implements OnInit {

	usuario:any = { nombre: "", apellidos: "", correo: "", doc: "", razSoc: "", celular: "" };
	evento:any = { fecha: "", motivo: "", plantilla: 1, horario: 1, invitados: "" };
	alimentacion: FormGroup;
	
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