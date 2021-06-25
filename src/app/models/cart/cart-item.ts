import { Product } from '../product';

export class CartItem {
  cartItemPrice: number;

  isProduct() {
    return this.hasOwnProperty('product');
  }

  isDelivery() {
    return this.hasOwnProperty('deliveryDate');
  }
}

export class ProductCartItem extends CartItem {
  constructor(product: Product, quantity: number) {
    super();
    this.product = product;
    this.quantity = quantity;
    this.cartItemPrice = this.product.price * this.quantity;

  }

  product: Product;
  quantity: number;
}

export class DeliveryCartItem extends CartItem {
  constructor(deliveryDate: string) {
    super();
    this.cartItemPrice = 50;
    this.deliveryDate = deliveryDate;
  }

  address: string;
  deliveryDate: string;
}
