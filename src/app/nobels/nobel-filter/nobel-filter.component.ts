import { Component, OnInit }    from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

import { Subject } from 'rxjs';

import { Filter }             from './nobel-filter.model';
import { NobelFilterService } from './nobel-filter.service';

@Component({
  selector: 'app-nobel-filter',
  templateUrl: './nobel-filter.component.html',
  styleUrls: ['./nobel-filter.component.scss'],
  providers: [NobelFilterService]
})
export class NobelFilterComponent implements OnInit {
  private searchUpdated = new Subject<Filter>();
  @Output() searchTextEmitter = new EventEmitter<Filter>();

  filterInputs = new Filter();
  allFilters = this.filterInputs.allOptions();

  constructor(private filterService: NobelFilterService) {
  }

  ngOnInit() {
  }

  filterEventHandler($event) {
    console.log("filterEventHandler", $event);
  }

  onSearchChange() {
    console.log("onSearchChange");
  }

  onResetFilters() {
    console.log("onResetFilters");
  }

  emitFilters() {
    console.log("emitFilters");
  }
}
