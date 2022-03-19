import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioListadoPage } from './pages/usuario-listado/usuario-listado.page';
import { UsuarioEditarPage } from './pages/usuario-editar/usuario-editar.page';


export const MANTENIMIENTOS_COMPONENTS = [
    //PrincipalComponent,
    //ContainerInsideComponent
]

const routes: Routes = 
[
    {
        path:'mantenimientos',
        //component: ContainerInsideComponent,
        children:
        [
            {
                path:'usuario/listado',
                component: UsuarioListadoPage
            },
            {
                path:'usuario/editar/:id',
                component: UsuarioEditarPage
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class MantenimientosRoutingModule { }