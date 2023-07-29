import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'episodios',
    loadChildren: () =>
      import('./episodios/episodios.module').then((m) => m.EpisodiosModule),
  },
  {
    path: 'personajes',
    loadChildren: () =>
      import('./pages/personajes/personajes.module').then(
        (m) => m.PersonajesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
