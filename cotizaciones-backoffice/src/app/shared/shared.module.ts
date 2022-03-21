import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//import { DatePipe, CurrencyPipe } from '@angular/common';
//import { CdkTableModule } from '@angular/cdk/table';
//import { ReactiveFormsModule } from '@angular/forms';

//import { AlertModule } from 'ngx-bootstrap';

//import { MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatRadioModule, MatPaginatorModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
//import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
//import { MatBadgeModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
//import { MatHint } from '@angular/material/hint';
/*import {
	MatAutocompleteModule,
	MatButtonToggleModule,
	MatChipsModule,
	MatDividerModule,
	MatGridListModule,
	MatMenuModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRippleModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatTooltipModule,
} from '@angular/material';*/

//import { MaterialFileInputModule } from 'ngx-material-file-input';

import { CdkTableModule } from '@angular/cdk/table';
//import { ReactiveFormsModule } from '@angular/forms';

//import { HeaderService } from './services/header.service';
//import { AlertService } from './services/alert.service';
//import { SecurityService } from './services/security.service';
//import { CommonService } from './services/common.service';

//import { ContainerInsideComponent } from './components/containers/container-inside/container-inside.component';


@NgModule({
	declarations: [
		//ContainerInsideComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,

		MatFormFieldModule,
		//MatBadgeModule,
		//MaterialFileInputModule,
		CdkTableModule,
		//MatAutocompleteModule,
		//MatButtonModule,
		//MatButtonToggleModule,
		MatCardModule,
		//MatCheckboxModule,
		//MatChipsModule,
		MatStepperModule,
		MatDatepickerModule,
		MatDialogModule,
		//MatDividerModule,
		MatExpansionModule,
		//MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		//MatMenuModule,
		//MatPaginatorModule,
		//MatProgressBarModule,
		//MatProgressSpinnerModule,
		//MatRadioModule,
		//MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		//MatSlideToggleModule,
		//MatSnackBarModule,
		//MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		//MatTooltipModule
	],
	exports: [
		MatFormFieldModule,
		//MatBadgeModule,
		//MaterialFileInputModule,
		CdkTableModule,
		//MatAutocompleteModule,
		//MatButtonModule,
		//MatButtonToggleModule,
		MatCardModule,
		//MatCheckboxModule,
		//MatChipsModule,
		MatStepperModule,
		MatDatepickerModule,
		MatDialogModule,
		//MatDividerModule,
		MatExpansionModule,
		//MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		//MatMenuModule,
		//MatPaginatorModule,
		//MatProgressBarModule,
		//MatProgressSpinnerModule,
		//MatRadioModule,
		//MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		//MatSlideToggleModule,
		//MatSnackBarModule,
		//MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		//MatTooltipModule,

		//ContainerInsideComponent
	],
	providers: [
		//HeaderService,
		//AlertService,
		//SecurityService,
		//CommonService
	]
})
export class SharedModule { }