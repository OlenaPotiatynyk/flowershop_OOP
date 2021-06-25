import { CartItem, DeliveryCartItem, ProductCartItem } from './cart-item'
import { Product } from '../product'

export class Cart {
  date: string;
  totalPrice: number;
  cartItems: CartItem[];

  constructor() {
    this.date = new Date().toDateString()
    this.cartItems = []
    this.totalPrice = 0
  }

  recalculate(): void {
    this.totalPrice = this.cartItems
      .map(item => item.cartItemPrice)
      .reduce((price, itemPrice) => (price + itemPrice))
  }

  addCartItem(product: Product, quantity: number): void {
    this.cartItems.push(new ProductCartItem(product,quantity))
    this.recalculate()
  }

  addDeliveryItem(): void {
    this.cartItems.push(new DeliveryCartItem('tomorrow'))
    this.recalculate()
  }

  getDeliveryItem(): DeliveryCartItem {
    return this.cartItems.find(item => item.isDelivery()) as DeliveryCartItem
  }

  removeDeliveryItem(): void {
    this.cartItems.splice(this.cartItems.indexOf(this.cartItems.find(item => item.isDelivery())))
    this.recalculate()
  }

  clearCart(){
    this.cartItems = []
    this.totalPrice = 0
  }
}
