import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { Movie } from '../shared/movie';

@Component({
  selector: 'openska-movies',
  template: `
    <div *ngFor="let movie of movies">
    <h1>
      <a [routerLink]="movie.id">{{movie.title}}</a>
    </h1>
    <img [src]="movie.image.src" alt=""></div>
  `,
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

  constructor(protected movieService: MoviesService) { }

  ngOnInit() {

    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
    }, () => {});
  }
}
