import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SlidesService } from './slideshow/shared/slides.service';
import { CinemaModule } from './cinema/cinema.module';
import { SlideComponent } from './slideshow/slide/slide.component';
import { PaginationComponent } from './slideshow/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    SlideComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    CinemaModule,
  ],
  providers: [SlidesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
