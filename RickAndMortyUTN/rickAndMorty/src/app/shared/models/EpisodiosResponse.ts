import { Info } from './Info';
import { Episodios } from './Episodio';

export interface EpisodiosResponse {
  info: Info;
  results: Episodios[];
}
