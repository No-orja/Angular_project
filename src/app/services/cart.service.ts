import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return [...this.items];
  }

  clearCart(): void {
    this.items = [];
  }

  removeFromCart(productId: number): void {
    this.items = this.items.filter((p) => p.id !== productId);
  }

  getTotal(): number {
    return this.items.reduce((sum, p) => sum + p.price, 0);
  }
  getItemsCount(): number {
    return this.items.length;
  }
}
