import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { SharedModule } from './shared/shared.module';
import { MantenimientosModule } from './mantenimientos/mantenimientos.module';
import { SeguridadModule } from './seguridad/seguridad.module';
import { GeneralModule } from './general/general.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	BrowserAnimationsModule,
	//SharedModule,
	SeguridadModule,
	MantenimientosModule,
	GeneralModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
