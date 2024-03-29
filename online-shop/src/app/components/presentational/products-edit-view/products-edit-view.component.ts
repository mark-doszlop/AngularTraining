import { Component, Input } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/product.types';

@Component({
  selector: 'app-products-edit-view',
  templateUrl: './products-edit-view.component.html'
})
export class ProductsEditViewComponent{
  @Input() product !: Product | null;
  
}
