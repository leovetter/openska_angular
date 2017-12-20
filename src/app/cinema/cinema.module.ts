import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { MoviesService } from './shared/movies.service';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  imports: [
    CommonModule,
    CinemaRoutingModule
  ],
  declarations: [MoviesComponent, MovieComponent, MovieDetailsComponent],
  providers: [MoviesService],
  exports: [MoviesComponent, MovieComponent]
})
export class CinemaModule { }
