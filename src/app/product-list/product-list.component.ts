import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share(productName: string) {
    window.alert(`The product ${productName} has been shared!`);
  }

  notifyForSale(productPrice: number) {
    window.alert(`The current price is $${productPrice}, we will notify you when the product is on sale!`)
  }
}
