import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';

@NgModule({
  declarations: [PersonajesComponent],
  imports: [CommonModule, PersonajesRoutingModule, MatCardModule],
})
export class PersonajesModule {}
