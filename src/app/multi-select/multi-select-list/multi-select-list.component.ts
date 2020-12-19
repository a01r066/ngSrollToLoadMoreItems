import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-multi-select-list',
  templateUrl: './multi-select-list.component.html',
  styleUrls: ['./multi-select-list.component.css']
})
export class MultiSelectListComponent implements OnInit {
  @Input() categories: Array<string>;
  @Output() scrollingFinished = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  onScrollingFinished() {
    this.scrollingFinished.emit();
  }
}
