import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

//import { UsuarioService } from '../../services/usuario.service';

@Component({
	selector: 'app-olvide-contrasena',
	templateUrl: './olvide-contrasena.page.html',
	styleUrls: ['./olvide-contrasena.page.scss']
})
export class OlvideContrasenaPage implements OnInit {

	constructor() { }

	ngOnInit() 
	{

	}

	grabar():void {
		
	}

	cancelar():void {
		//alert("¿Desea cancelar?");
	}
}