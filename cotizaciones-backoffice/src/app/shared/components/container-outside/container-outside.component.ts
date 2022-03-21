import { Component, OnInit } from '@angular/core';
//import { environment } from 'src/environments/environment';

@Component({
  selector: 'shared-container-outside',
  templateUrl: './container-outside.component.html',
  styleUrls: ['./container-outside.component.scss']
})
export class ContainerOutsideComponent implements OnInit {

	//appVersion:string = environment.version;

	constructor() { }

	ngOnInit() {
	}

}