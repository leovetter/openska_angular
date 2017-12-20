import { Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { SlidesService } from './shared/slides.service';
import { Slide } from './shared/slide';
import { SlideComponent } from './slide/slide.component';

@Component({
  selector: 'openska-slideshow',
  template: `
  <div id="slideshow">
    <div id="slides" [style.transform]="transform" [style.transitionDuration.ms]="speed"
    (transitionend)="start()">
      <ng-content></ng-content>
    </div>
    <openska-pagination [slides]="slides" (pagination)="onPagination($event)"></openska-pagination>
  </div>
  `,
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterContentInit {

  @Input() delay = 5000;
  @Input() speed = 2000;
  total: number;
  current = 1;
  timer: number;
  transform: string;
  @ContentChildren(SlideComponent) slides: QueryList<SlideComponent>;

  // Mettre une visibilité (protected, public...) devant le paramètre
  // permet de créer automatiquement la propriété this.slideService
  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.total = this.slides.length;
    this.start();
  }

  /** Launches the automatic delay */
  start() {

    /* Stop any current timer to avoid concurrent timers */
    this.stop();

    /* Launches a new timer and then move */
    this.timer = window.setTimeout(() => {
      this.move();
    }, this.delay);

  }

  /** Stops the current timeout */
  stop() {

    window.clearTimeout(this.timer);

  }

  /**
   * Move to another slide
   * @param next Position of the destination slide
   */
  move(next = (this.current < this.total) ? this.current + 1 : 1) {

    /* Translate the slides container */
    this.transform = `translateX(${(1 - next) * 100}%)`;

    /* Update the new current position */
    this.current = next;

  }

  /** Pagination listener handler */
  onPagination(event: number) {

    this.stop();
    this.move(event);
  }
}
