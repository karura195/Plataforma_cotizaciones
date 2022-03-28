import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

//import { UsuarioService } from '../../services/usuario.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

	constructor(private router:Router) { }

	ngOnInit() 
	{

	}

	login():void {
		this.router.navigate(['/home']);
	}

	cancelar():void {
		//alert("¿Desea cancelar?");
	}
}