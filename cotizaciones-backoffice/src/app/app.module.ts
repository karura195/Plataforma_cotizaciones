import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MantenimientosModule } from './mantenimientos/mantenimientos.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	MantenimientosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
