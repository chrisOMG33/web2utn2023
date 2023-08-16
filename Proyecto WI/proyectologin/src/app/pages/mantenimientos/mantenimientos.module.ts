import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientosRoutingModule } from './mantenimientos-routing.module';
import { MantenimientosComponent } from './mantenimientos.component';
import { MaterialModule } from 'src/app/material.module';
import { LoginComponent } from './login/login.component';
// import { AdminRegisterComponent } from './register/admin-register/admin-register.component';

@NgModule({
  declarations: [
    MantenimientosComponent,
    LoginComponent,

    // AdminRegisterComponent,
  ],
  imports: [CommonModule, MantenimientosRoutingModule, MaterialModule],
})
export class MantenimientosModule {}
