import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { ShoppingCartService } from '../modules/services/shopping-cart.service';
import { Product } from '../modules/shared/types/product.types';

@Injectable({ providedIn: 'root' })
export class ProductService {
    readonly ROOT_URL = environment.apiUrl;

    constructor(private http: HttpClient, private shoppingCartService: ShoppingCartService) {
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.ROOT_URL + '/products');
    }

    getProductById(id: string): Observable<Product> {
        return this.http.get<Product>(this.ROOT_URL + '/products/' + id);
    }

    deleteProduct(id: string): void {
        this.http.delete(this.ROOT_URL + '/products/' + id).subscribe();
    }

    addProduct(product:Product):void{
        this.http.post<Product>(this.ROOT_URL + '/products', product).subscribe();
    }

    addProductToCart(product: Product) {
        this.shoppingCartService.addProductToCart(product);
    }

    editProduct(product:Product):void{
        this.http.put<Product>(this.ROOT_URL + '/products/' + product.id, product).subscribe();
    }


}