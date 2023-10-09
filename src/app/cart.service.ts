import { Shipping } from './shipping';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';
import { CART_KEY } from './cart';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  get items(): Product[] {
    return this.localService.getData(CART_KEY) || [];
  }

  constructor(
    private http: HttpClient,
    private localService: LocalService
  ) { }

  getCart() {
    return this.items;
  }

  addToCart(product: Product) {
    this.localService.saveData(CART_KEY, [...this.items, product]);
  }

  removeFromCart(product: Product) {
    this.localService.saveData(CART_KEY, this.items.filter((i) => i.id !== product.id));
  }

  clearCart() {
    this.localService.saveData(CART_KEY, []);

    return this.items;
  }

  isInCart(product: Product): boolean {
    return this.items.some((i) => i.id === product.id);
  }

  getShippingPrices() {
    return this.http.get<Shipping[]>('/assets/shipping.json');
  }
}
