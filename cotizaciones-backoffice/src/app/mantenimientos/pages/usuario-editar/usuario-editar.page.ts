import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { UsuarioService } from '../../services/usuario.service';

@Component({
    selector: 'app-usuario-editar',
    templateUrl: './usuario-editar.page.html',
    styleUrls: ['./usuario-editar.page.scss']
})
export class UsuarioEditarPage implements OnInit {

	usuario:any = { correo: "", nombre: "", apellidos: "", rolId: 1, estadoId: 1 };

    constructor(private usuarioService:UsuarioService) { }

    ngOnInit() 
    {

    }

	grabar():void {

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
		alert("¿Desea cancelar?");
	}
}