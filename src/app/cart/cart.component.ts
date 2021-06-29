import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../models/cart/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  deliveryNeeded = false;
  @Input()
  cart: Cart;
  address: string;
  showReceipt = false;
  showEmptyCartError = false;

  constructor() {
  }

  ngOnInit() {
  }

  addDelivery() {
    if (this.deliveryNeeded) {
      this.cart.addDeliveryItem();
    } else {
      this.cart.removeDeliveryItem();
    }
  }

  placeOrder() {
    if (this.cart.cartItems.length < 1) {
      this.showEmptyCartError = true;
      setTimeout(() => {
        this.showEmptyCartError = false;
      }, 3000);
    } else {
      this.showReceipt = true;
      setTimeout(() => {
        this.cart.clearCart();
        this.showReceipt = false;
        this.deliveryNeeded = false;
        this.address = '';
      }, 3000);
    }
  }

  updateAddress() {
    this.cart.getDeliveryItem().address = this.address;
  }
}
