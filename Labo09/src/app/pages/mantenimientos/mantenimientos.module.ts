import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientosRoutingModule } from './mantenimientos-routing.module';
import { MantenimientosComponent } from './mantenimientos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { MaterialModule } from 'src/app/material.module';
import { AdminProductosComponent } from './productos/admin-productos/admin-productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminUsuariosComponent } from './usuarios/admin-usuarios/admin-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { AdminMatriculasComponent } from './matriculas/admin-matriculas/admin-matriculas.component';

@NgModule({
  declarations: [
    MantenimientosComponent,
    ClientesComponent,
    ProductosComponent,
    AdminProductosComponent,
    AdminUsuariosComponent,
    UsuariosComponent,
    MatriculasComponent,
    AdminMatriculasComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MantenimientosRoutingModule,
    MaterialModule,
  ],
})
export class MantenimientosModule {}
