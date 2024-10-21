import { Injectable } from '@angular/core';
import { Product } from '../app/models/product.model'; 

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    return this.cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  }

  clearCart() {
    this.cart = [];
  }
}
