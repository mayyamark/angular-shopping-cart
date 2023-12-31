import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));

    this.product = products.find(p => p.id === productId);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(`Product ${product.name} was aaded to the cart!`)
  }

  isInCart(product: Product): boolean {
    return this.cartService.isInCart(product);
  }
}
