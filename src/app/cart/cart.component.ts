import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getCart();

  checkoutFrom = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('The order was submitted!', this.checkoutFrom.value);
    this.checkoutFrom.reset();
  }

  onClearClick(): void {
    this.cartService.clearCart();
    this.items = this.cartService.getCart();
  }
}
