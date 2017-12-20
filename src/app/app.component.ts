import { Component } from '@angular/core';

@Component({
  selector: 'openska-root',
  template: `
    <openska-slideshow delay="2000">
      <openska-slide><img src="static/images/movies/starwars.jpg" alt=""></openska-slide>
      <openska-slide><img src="static/images/movies/coco.jpg" alt=""></openska-slide>
      <openska-slide><img src="static/images/movies/spiderman.jpg" alt=""></openska-slide>
    </openska-slideshow>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openska';
}
