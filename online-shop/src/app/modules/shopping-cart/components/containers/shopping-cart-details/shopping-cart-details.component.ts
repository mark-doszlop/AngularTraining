import { Component } from '@angular/core';
import { MOCK_PRODUCTS } from 'src/app/mocks/products.mocks';
import { Product } from 'src/app/modules/shared/types/products.types';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/modules/services/shopping-cart.service';
import { ProductWithQuantity } from 'src/app/modules/shared/types/product-with-quantity.type';
import { ProductFromOrder } from 'src/app/modules/shared/types/product-from-order.types';
import { Order } from 'src/app/modules/shared/types/order.types';
import { } from '../../../../../../environments/environment';
@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss']
})
export class ShoppingCartDetailsComponent {
  customerId: string = "de96921d-2f8d-46e7-8061-31468180de96";
  cartProducts: ProductWithQuantity[];
  idProductToBeAdded: string;

  constructor(private route: ActivatedRoute, private service: ShoppingCartService) {
    this.cartProducts = this.service.getProductsFromCart();
    this.idProductToBeAdded = String(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

  deleteFromCart(product: Product): void {
    this.service.deleteProductFromCart(product);
    this.cartProducts = this.service.getProductsFromCart();
  }

  checkoutProducts(): void {
    const orderProducts: ProductFromOrder[] = [];
    this.cartProducts.forEach(product => orderProducts.push(<ProductFromOrder>({ productId: product.id, quantity: product.quantity })));
    console.log(orderProducts);
    const order = <Order>({ customerId: this.customerId, products: orderProducts });
    this.service.orderPorducts(order);
    this.cartProducts = [];
  }

}