import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { MantenimientoComponent } from './mantenimiento.component';
import { ChoferesComponent } from './choferes/choferes.component';
import { MaterialModule } from 'src/app/material.module';
import { AdminLicenciasComponent } from './choferes/admin-licencias/admin-licencias.component';

@NgModule({
  declarations: [
    MantenimientoComponent,
    ChoferesComponent,
    AdminLicenciasComponent,
  ],
  imports: [CommonModule, MantenimientoRoutingModule, MaterialModule],
})
export class MantenimientoModule {}
