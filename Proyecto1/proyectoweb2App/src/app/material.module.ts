import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const lista = [
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
];
@NgModule({
  exports: [...lista], // los 3 puntos son los elementos de la list, no lo vea como array, sino como los elementos que hay dentro
  imports: [...lista],
})
export class MaterialModule {}
