import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';
import Swal from 'sweetalert2';

export interface Task {
	name: string;
	completed: boolean;
	color: ThemePalette;
	subtasks?: Task[];
  }

@Component({
	selector: 'app-cotizacion-inicial',
	templateUrl: './cotizacion-inicial.page.html',
	styleUrls: ['./cotizacion-inicial.page.scss']
})
export class CotizacionInicialPage implements OnInit {

	usuario:any = { nombre: "", apellidos: "", correo: "", doc: "", razSoc: "", celular: "" };
	evento:any = { fecha: "", motivo: "", plantilla: 1, horario: 1, invitados: "" };
	
	task: Task = {
		name: 'Platos de fondo',
		completed: false,
		color: 'primary',
		subtasks: [
		  {name: 'A base de cerdo', completed: false, color: 'primary'},
		  {name: 'A base de pavo', completed: false, color: 'primary'},
		  {name: 'A base de carne', completed: false, color: 'primary'},
		  {name: 'Lechón', completed: false, color: 'primary'},
		],
	  };
	  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
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