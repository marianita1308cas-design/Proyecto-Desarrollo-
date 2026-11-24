import { Routes } from '@angular/router';
import { Clientes } from './Views/clientes/clientes';
import { Ventas } from './Views/ventas/ventas';
import { Inventario } from './Views/inventario/inventario';
import { Proveedores } from './Views/proveedores/proveedores';

import { FormularioComponent } from './Views/formulario/formulario.component';
import { Login } from './Views/login/login';
import { Table } from './table/table';

export const routes: Routes = [
  {path:"login", component: Login},
  {path:"", component: Clientes}, 
  {path:"mat-table", component: Table},
  {path:"clientes", component: Clientes}, 
  {path:"ventas", component: Ventas},  
  {path:"inventario", component: Inventario}, 
  {path:"proveedores", component: Proveedores}, 
  {path:"formulario", component: FormularioComponent}, 

  {path:"**", redirectTo: ""},
];

