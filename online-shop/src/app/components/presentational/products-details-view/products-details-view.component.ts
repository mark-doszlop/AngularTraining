import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/product.types';

@Component({
  selector: 'app-products-details-view',
  templateUrl: './products-details-view.component.html',
  styleUrls: ['./products-details-view.component.scss']
})
export class ProductsDetailsViewComponent {
  @Input() product !: Product;
  @Output() deleteProductEvent = new EventEmitter<string>();
  isAdmin!: boolean | null;

  ngOnInit() {
    if(localStorage.getItem('isAdmin')==='yes'){
      this.isAdmin=true;
    }
    else{
      this.isAdmin=false;
    }
  }
  deleteProduct(): void {
    if(this.product){
      this.deleteProductEvent.emit(this.product.id);
    }
  }

}
