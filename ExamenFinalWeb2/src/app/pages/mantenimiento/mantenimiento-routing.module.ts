import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenimientoComponent } from './mantenimiento.component';
import { ChoferesComponent } from './choferes/choferes.component';

const routes: Routes = [
  { path: 'index', component: MantenimientoComponent },
  { path: 'choferes', component: ChoferesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoRoutingModule {}
