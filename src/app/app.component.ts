import { Component, OnInit } from '@angular/core';
import { Inventory, InventoryItem } from './models/inventory';
import { CutFlowers, Plant, Seed } from './models/product';
import { Cart } from './models/cart/cart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inventory: Inventory;
  cart = new Cart();
  displayedInventoryItems: InventoryItem[];
  selectedType: string;

  ngOnInit(): void {
    this.generateInventory();
    this.displayedInventoryItems = this.inventory.inventoryItems;
  }

  generateInventory() {
    this.inventory = new Inventory(
      [
        {
          product: {
            type: 'Cut',
            name: 'roses',
            price: 10.5,
            photoUrl: './assets/rose.jpg',
            height: 80
          } as CutFlowers,
          quantity: 100
        },
        {
          product: {
            type: 'Cut',
            name: 'tulips',
            price: 2.5,
            photoUrl: './assets/tulip.jpg',
            height: 40
          } as CutFlowers,
          quantity: 23
        },
        {
          product: {
            type: 'Cut',
            name: 'lily',
            price: 25.0,
            photoUrl: './assets/lily.jpg',
            height: 70
          } as CutFlowers,
          quantity: 543
        },
        {
          product: {
            type: 'Seed',
            name: 'tomato seeds',
            price: 1.0,
            photoUrl: './assets/tomato_seeds.jpg',
            weight: 80
          } as Seed, quantity: 12
        },
        {
          product: {
            type: 'Seed',
            name: 'cucumber seeds',
            price: 1.5,
            photoUrl: './assets/cucumber_seeds.jpg',
            weight: 100
          } as Seed, quantity: 12
        },
        {
          product: {
            type: 'Seed',
            name: 'onion seeds',
            price: 1.5,
            photoUrl: './assets/onion_seeds.jpeg',
            weight: 150
          } as Seed, quantity: 54
        },
        {
          product: {
            type: 'Plant',
            name: 'ficus',
            price: 1.5,
            photoUrl: './assets/ficus.jpg',
            potColor: 'green'
          } as Plant, quantity: 3
        },
        {
          product: {
            type: 'Plant',
            name: 'orchid',
            price: 1.5,
            photoUrl: './assets/orchid.jpg',
            potColor: 'white'
          } as Plant, quantity: 1
        },
        {
          product: {
            type: 'Plant',
            name: 'zamioculcas',
            price: 1.5,
            photoUrl: './assets/zamioculcas.jpg',
            potColor: 'orange'
          } as Plant, quantity: 5
        },
      ]
    );
  }

  addItemToCart($event) {
    const product = this.inventory.getOutItem($event.product.name, $event.quantity);
    this.cart.addCartItem(product, $event.quantity);
  }

  onTypeSelected($event) {
    this.selectedType = $event.target.value;
    if (this.selectedType === 'All') {
      this.displayedInventoryItems = this.inventory.inventoryItems;
    } else {
      this.displayedInventoryItems = this.inventory.inventoryItems
        .filter(item => (item.product.type === this.selectedType));
    }
  }

  filter($event, type, field) {
    this.displayedInventoryItems = this.inventory.inventoryItems
      .filter(item => item.product.type === type)
      .filter(item => item.product[field].toString() === $event.target.value);
  }

  getAvailableSeedWeights() {
    return this.inventory.inventoryItems
      .filter(item => item.product.type === 'Seed')
      .map(item => (item.product as Seed).weight);
  }

  getAvailableCutHeight() {
    return this.inventory.inventoryItems
      .filter(item => item.product.type === 'Cut')
      .map(item => (item.product as CutFlowers).height);
  }

  getAvailablePlantPots() {
    return this.inventory.inventoryItems
      .filter(item => item.product.type === 'Plant')
      .map(item => (item.product as Plant).potColor);
  }
}
