import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';

interface CartItem {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  total = 0;

  fullName = '';
  address = '';
  cardNumber = '';

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.loadCart();
  }

  private loadCart(): void {
    const rawItems = this.cartService.getItems();
    const map = new Map<number, CartItem>();

    for (const p of rawItems) {
      const existing = map.get(p.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        map.set(p.id, { product: p, quantity: 1 });
      }
    }

    this.items = Array.from(map.values());
    this.calcTotal();
  }

  calcTotal(): void {
    this.total = this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  onQuantityChange(): void {
    this.calcTotal();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.items = [];
    this.total = 0;
  }

  onSubmit(form: NgForm): void {
    if (form.invalid || this.items.length === 0) {
      return;
    }

    const name = this.fullName;
    const totalValue = this.total;

    this.clearCart();
    form.resetForm();

    this.router.navigate(['/success'], {
      state: { fullName: name, total: totalValue },
    });
  }
}
