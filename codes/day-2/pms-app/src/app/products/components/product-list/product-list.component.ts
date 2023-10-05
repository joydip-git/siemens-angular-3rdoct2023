import { Component, Inject, OnInit } from '@angular/core';
//import { products } from 'src/app/repository/products';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/product';
import { PRODUCT_SERVICE_TOKEN } from 'src/app/constants/app-constants';
import { IProductServiceContract } from '../../services/product-service.contract';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  //providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  filterText = ''
  productRecords?: Product[];

  // constructor(private ps: ProductService) {

  // }

  //private ps: ProductService;
  // constructor(@Inject(PRODUCT_SERVICE_TOKEN) private ps: ProductService) {
  //   this.ps = ps
  // }

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private ps: IProductServiceContract) {
    //this.ps = ps
  }

  ngOnInit(): void {
    this.productRecords = this.ps.getProducts()
  }

  updateFilterText(value: string) {
    this.filterText = value
  }
}
