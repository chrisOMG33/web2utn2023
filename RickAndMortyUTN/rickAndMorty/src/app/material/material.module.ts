import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [CommonModule, MatCardModule, MatTableModule, MatMenuModule],
  exports: [MatCardModule, MatTableModule, MatMenuModule],
})
export class MaterialModule {}
