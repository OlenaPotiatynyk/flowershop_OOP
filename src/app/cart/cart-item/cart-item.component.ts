import { Component, Input, OnInit } from '@angular/core';
import { CartItem, DeliveryCartItem, ProductCartItem } from '../../models/cart/cart-item'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem: CartItem

  constructor() {
  }

  ngOnInit() {
  }

  asProduct() {
    return this.cartItem as ProductCartItem
  }

  asDelivery() {
    return this.cartItem as DeliveryCartItem
  }
}
