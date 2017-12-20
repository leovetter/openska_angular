import { Component, OnInit, Input } from '@angular/core';
import { Slide } from '../shared/slide';

@Component({
  selector: 'openska-slide',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  @Input() slide: Slide;

  constructor() { }

  ngOnInit() {
  }

}
