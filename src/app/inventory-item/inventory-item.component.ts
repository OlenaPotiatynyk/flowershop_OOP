import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InventoryItem } from '../models/inventory'

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {

  quantity = 1

  @Input()
  inventoryItem: InventoryItem
  @Output()
  addItemToCart = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddItemToCart() {
    this.addItemToCart.emit({product:this.inventoryItem.product, quantity: this.quantity})
  }

}
