import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
//import { products } from 'src/app/repository/products';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/product';
import { PRODUCT_SERVICE_TOKEN } from 'src/app/constants/app-constants';
import { IProductServiceContract } from '../../services/product-service.contract';
import { ApiResponse } from 'src/app/models/apiresponse';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  //providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy {
  filterText = ''

  isComplete = false
  errorMessage = ''
  productRecords?: Product[];

  private sub?: Subscription;

  // constructor(private ps: ProductService) {

  // }

  //private ps: ProductService;
  // constructor(@Inject(PRODUCT_SERVICE_TOKEN) private ps: ProductService) {
  //   this.ps = ps
  // }

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private ps: IProductServiceContract) {
    //this.ps = ps
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  ngOnInit(): void {
    //this.productRecords = this.ps.getProducts()

    const obs = this.ps.getProducts()
    this.sub = obs
      .subscribe({
        next: (respData: ApiResponse<Product[]>) => {
          if (respData.data != null) {
            this.productRecords = respData.data
            this.isComplete = true
            this.errorMessage = ''
          } else {
            this.productRecords = undefined
            this.isComplete = true
            this.errorMessage = respData.message
          }
        },
        error: (e: Error) => {
          this.productRecords = undefined
          this.isComplete = true
          this.errorMessage = e.message
        },
        //complete: () => { }
      })

  }

  updateFilterText(value: string) {
    this.filterText = value
  }
}
