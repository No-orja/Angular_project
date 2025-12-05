import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class ProductDetailsComponent {

  product?: Product;

  // رجّعنا الآري الأصلية
  products: Product[] = [
    {
      id: 1,
      name: 'Red T-Shirt',
      price: 49.99,
      description: 'Comfortable red t-shirt made of 100% cotton.',
      url: 'assets/images/09fd77e577213be79df0b0a882a4b1f7.jpg',
    },
    {
      id: 2,
      name: 'Blue Jeans',
      price: 129.5,
      description: 'Classic blue denim jeans with slim fit.',
      url: 'assets/images/37ba65f244299546057f207e4bd8c923.jpg',
    },
    {
      id: 3,
      name: 'Sneakers',
      price: 199.0,
      description: 'Lightweight sneakers perfect for everyday wear.',
      url: 'assets/images/881a04d5ae9ac186aeabae42a3c89420.jpg',
    },
  ];

  quantities = Array.from({ length: 10 }, (_, i) => i + 1);
  selectedQuantity = 1;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === id);
  }

  addToCart() {
    if (!this.product) return;

    this.cartService.addToCart(this.product);
    window.alert(`Added ${this.product.name} to cart!`);
  }
}
