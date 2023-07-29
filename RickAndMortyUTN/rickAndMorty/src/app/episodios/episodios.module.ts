import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { EpisodiosComponent } from './episodios.component';

@NgModule({
  declarations: [EpisodiosComponent],
  imports: [CommonModule, MatCardModule],
})
export class EpisodiosModule {}
