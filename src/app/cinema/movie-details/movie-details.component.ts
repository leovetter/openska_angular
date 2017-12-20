import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../shared/movie';

@Component({
  selector: 'openska-movie-details',
  template: `
    <div>
      <h1>{{movie.title}}</h1>
      <p>{{movie.summary}}</p>
    </div>
  `,
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {}

}
