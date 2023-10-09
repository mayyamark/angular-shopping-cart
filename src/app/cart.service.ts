import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor() { }

  getCart() {
    return this.items;
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  isInCart(product: Product): boolean {
    return this.items.some((i) => i.id === product.id);
  }
}
