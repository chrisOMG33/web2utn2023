import { Component } from '@angular/core';
import { EpisodiosService } from 'src/app/shared/services/episodios.service';
import { EpisodiosResponse } from '../shared/models/EpisodiosResponse';
import { Episodios } from '../shared/models/Episodio';

@Component({
  selector: 'app-personajes',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss'],
})
export class EpisodiosComponent {
  results: EpisodiosResponse;
  constructor(private srvEpisodios: EpisodiosService) {}
  ngOnInit() {
    this.srvEpisodios.getEpisodios().subscribe((result) => {
      this.results = result;
    }); //Hay que suscribirse ya que es observable
  }
}
