import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCT_SERVICE_TOKEN } from 'src/app/constants/app-constants';
import { IProductServiceContract } from '../../services/product-service.contract';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  private sub?: Subscription;
  isComplete = false
  errorMessage = ''
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    @Inject(PRODUCT_SERVICE_TOKEN) private ps: IProductServiceContract
  ) {

  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.params["id"])
    this.sub = this.ps.getProductById(id).subscribe({
      next: (resp) => {
        if (resp.data != null) {
          this.product = resp.data
          this.isComplete = true
          this.errorMessage = ''
        } else {
          this.product = undefined
          this.isComplete = true
          this.errorMessage = resp.message
        }
      },
      error: (e: Error) => {
        this.product = undefined
        this.isComplete = true
        this.errorMessage = e.message
      }
    })
  }
}
