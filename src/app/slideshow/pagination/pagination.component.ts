import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Slide } from '../shared/slide';

@Component({
  selector: 'openska-pagination',
  template: `
    <ul id="pagination">
      <li *ngFor="let slide of slides; index as i" (click)="onPaginationClick(i+1)">{{i+1}}</li>
    </ul>
  `,
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() slides: Slide[];
  @Output() pagination = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

   /** Pagination listener handler */
   onPaginationClick(page: number) {

    this.pagination.emit(page);
  }

}
