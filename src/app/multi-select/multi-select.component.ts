import { Component, OnInit } from '@angular/core';
import {MultiSelectService} from '../multi-select.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent {
  categories$: Observable<Array<string>>;

  constructor(private dataService: MultiSelectService) {
    this.categories$ = dataService.categories$;
  }

  onScrollingFinished() {
    console.log('load more');
    this.dataService.loadMore();
  }

  loadMore(){
    console.log("Load more");
    this.dataService.loadMore();
  }
}
