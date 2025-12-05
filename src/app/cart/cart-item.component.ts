import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() product!: Product;
  @Input() quantity!: number;

  @Output() delete = new EventEmitter<number>();
  @Output() quantityChange = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.product.id);
  }

  onQtyChange() {
    this.quantityChange.emit();
  }
}
