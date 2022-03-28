import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioService } from '../../services/usuario.service';

@Component({
    selector: 'app-usuario-editar',
    templateUrl: './usuario-editar.page.html',
    styleUrls: ['./usuario-editar.page.scss']
})
export class UsuarioEditarPage implements OnInit {

	usuario:any = { correo: "", nombre: "", apellidos: "", rolId: 1, estadoId: 1 };

    constructor(private usuarioService:UsuarioService, private router:Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() 
    {
		let tmp = this.activatedRoute.snapshot.paramMap.get('id');
		let id = 0;
		if (tmp != null) id = +tmp;
		if (id > 0) {
			this.usuario = {
				correo: "mari.ochoa@clubhotelcusco.com", 
				nombre: "Maria", 
				apellidos: "Ochoa", 
				rolId: 2, 
				estadoId: 1
			};
		}
    }

	grabar():void {

		Swal.fire({
			icon: 'success',
			title: "OK",
			text: "Grabacion correcta.",

		}).then((result) => {
			this.router.navigate(['/mantenimientos/usuario/listado']);
		});
		return;

		this.usuarioService.grabar(this.usuario).subscribe(
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
		this.router.navigate(['/mantenimientos/usuario/listado']);
	}
}