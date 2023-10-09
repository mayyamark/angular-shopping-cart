import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;

  notifyForSale(productPrice: number) {
    window.alert(`The current price is $${productPrice}, we will notify you when the product is on sale!`)
  }
}
