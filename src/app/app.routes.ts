import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details';
import { CartComponent } from './cart/cart.component';
import { OrderSuccessComponent } from './order-success/order-success';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
{ path: 'products/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'success', component: OrderSuccessComponent },

];

