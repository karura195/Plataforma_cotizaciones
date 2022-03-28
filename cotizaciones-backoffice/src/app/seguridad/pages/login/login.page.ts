import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

//import { UsuarioService } from '../../services/usuario.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

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