import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { Movie } from '../shared/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'openska-movie',
  template: `
    <openska-movie-details *ngIf="movie" [movie]="movie"></openska-movie-details>
    <div *ngIf="!movie"></div>
  `,
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()movie: Movie;

  constructor(protected moviesService: MoviesService, protected route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id') || '1');
    this.moviesService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
    }, () => {});
  }

}
