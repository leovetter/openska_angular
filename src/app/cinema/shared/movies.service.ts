import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';

@Injectable()
export class MoviesService {

  constructor(protected http: HttpClient) { }

  getMovies() {

    return this.http.get<Movie[]>(`/api/movies/`);
  }

  getMovie(id: number) {
    return this.http.get<Movie>(`/api/movies/${id}`);
  }

}
