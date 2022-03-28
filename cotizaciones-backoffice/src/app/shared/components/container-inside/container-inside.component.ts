//import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { environment } from '../../../../environments/environment';

//import { TokenService } from '../../../shared/services/token.service';


@Component({
  selector: 'shared-container-inside',
  templateUrl: './container-inside.component.html',
  styleUrls: ['./container-inside.component.scss']
  //providers: [ MediaMatcher ]
})
export class ContainerInsideComponent {
	appVersion:string = environment.version;

	mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;

	@ViewChild('sidenav') sidenav: MatSidenav;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router:Router) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

	close(): void {
		this.sidenav.close();
	}

	logout():void {
		//this.tokenService.empty();
		this.router.navigate(['/login']);
	}

	goto(url: string): void {
		if (url == '') {
			localStorage.clear();
		}
		this.router.navigate([url]);
		this.close();
		//this.opened = false;
	}
}
