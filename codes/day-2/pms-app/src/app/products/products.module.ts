import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { StarComponent } from './components/star/star.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductService } from './services/product.service';
import { PRODUCT_SERVICE_TOKEN, SERVICE_TYPE } from '../constants/app-constants';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductFilterPipe,
    StarComponent,
    FilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductListComponent],
  providers: [
    //ProductService
    {
      provide: PRODUCT_SERVICE_TOKEN,
      useClass: SERVICE_TYPE
    }
  ]
})
export class ProductsModule { }
