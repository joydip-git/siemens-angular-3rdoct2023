import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  filterData = ''
  @Output("filterDataChanged") filterDataUpdated = new EventEmitter<string>()

  changeFilterData(value: string) {
    this.filterData = value
    this.filterDataUpdated.emit(this.filterData)
  }
}
