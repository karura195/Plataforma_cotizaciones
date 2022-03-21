//import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

//import { environment } from '../../../../environments/environment';

//import { TokenService } from '../../../shared/services/token.service';


@Component({
  selector: 'shared-container-inside',
  templateUrl: './container-inside.component.html',
  styleUrls: ['./container-inside.component.scss']
  //providers: [ MediaMatcher ]
})
export class ContainerInsideComponent {
	appVersion: string = "";

	opened: boolean = false;

	logout(): void {

	}

	close(): void {

	}
}
