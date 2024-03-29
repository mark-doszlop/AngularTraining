import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/shared/types/product.types';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html'
})
export class ProductsEditComponent {
  product$ !: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService
  ) {
  }

  ngOnInit(): void {
    this.product$ = this.getProduct();
  }

  getProduct(): Observable<Product> {
    const id = String(this.route.snapshot.paramMap.get('id'));
    return this.service.getProductById(id);
  }
}
