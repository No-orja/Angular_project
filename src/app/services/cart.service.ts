import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];

  addToCart(product: Product, quantity: number = 1): void {
    for (let i = 0; i < quantity; i++) {
      this.items.push(product);
    }
  }

  getItems(): Product[] {
    return [...this.items];
  }

  clearCart(): void {
    this.items = [];
  }

  getItemsCount(): number {
    return this.items.length;
  }
}
