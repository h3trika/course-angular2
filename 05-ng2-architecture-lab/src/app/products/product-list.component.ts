import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'prod-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  public selectedProduct: Product;

  constructor(private service: ProductService) {}

  public ngOnInit() {
    this.products = this.service.getProducts();
  }

  public selectProduct(product: Product): void {
    this.selectedProduct = product;
    console.log(`Product selected: ${JSON.stringify(product)}`);
  }
}
