import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-success',
  standalone: true,
  templateUrl: './order-success.html',
  styleUrls: ['./order-success.css'],
  imports: [CommonModule, RouterModule],
})
export class OrderSuccessComponent implements OnInit {
  fullName = '';
  total = 0;

  ngOnInit(): void {
    const nav = history.state as { fullName?: string; total?: number };
    this.fullName = nav.fullName || '';
    this.total = nav.total || 0;
  }
}
