import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
  imports: [CommonModule, RouterModule, HttpClientModule],
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  openDetails(id: number): void {
    this.router.navigate(['/products', id]);   // 👈 لاحظ /product مش /products
  }

  onAddToCart(product: Product, event: Event): void {
    event.stopPropagation(); // يمنع فتح صفحة التفاصيل عند الضغط على الزر
    this.cartService.addToCart(product);
    window.alert(`${product.name} added to cart`);
  }
}
