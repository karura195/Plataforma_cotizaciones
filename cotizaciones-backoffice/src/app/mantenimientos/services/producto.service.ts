import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

//import { HeaderService } from '../../shared/services/header.service';
//import { TokenService } from '../../shared/services/token.service';


@Injectable()
export class ProductoService {
	private api_url: string = "http://localhost:2000/api/producto/";

	constructor(private http: HttpClient) {

	}

	listado(filtro: string) {
		const url = this.api_url + "/listado";

		const data = { filtro: filtro };

		let headers = new HttpHeaders();
		headers = headers.set("Content-Type", "application/json; charset=utf-8");
		//let token = localStorage.getItem("token");
		//headers = headers.set('Token', token);
		let httpOptions:object = {headers: headers};

		return this.http.post<any>(url, data, httpOptions);
	}

	grabar(data: any) {
		const url = this.api_url + "/grabar";

		let headers = new HttpHeaders();
		headers = headers.set("Content-Type", "application/json; charset=utf-8");
		//let token = localStorage.getItem("token");
		//headers = headers.set('Token', token);
		let httpOptions:object = {headers: headers};

		return this.http.post<any>(url, data, httpOptions);
	}

}