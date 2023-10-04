import { Component } from '@angular/core';
import { products } from 'src/app/repository/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  filterText = ''
  productRecords = products

  updateFilterText(value: string) {
    this.filterText = value
  }
}
