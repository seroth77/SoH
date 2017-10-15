import {inject} from 'aurelia-framework';
import {Episodes} from './content/soh';

@inject(Episodes)
export class App {
  constructor(episodes) {
    this.audioArray = episodes.getEpisodes();
  }
}
