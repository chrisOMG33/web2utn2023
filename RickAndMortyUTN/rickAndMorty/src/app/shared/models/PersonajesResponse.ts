import { Info } from './Info';
import { Personajes } from './Personaje';

export interface PersonajesResponse {
  info: Info;
  results: Personajes[];
}
