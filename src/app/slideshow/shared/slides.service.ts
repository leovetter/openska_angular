import { Injectable } from '@angular/core';

import { Slide } from './slide';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SlidesService {

  /* slides: Slide[] = [
    { imgSrc: 'static/images/movies/starwars.jpg', imgAlt: '' },
    { imgSrc: 'static/images/movies/coco.jpg', imgAlt: '' },
    { imgSrc: 'static/images/movies/spiderman.jpg', imgAlt: '' },
  ]; */

  constructor(protected http: HttpClient) {}

  getSlides() {

    return this.http.get<Slide[]>(`/api/slides`);
  }
}
