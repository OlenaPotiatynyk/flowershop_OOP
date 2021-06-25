import { Product } from './product'

export class Inventory {
  inventoryItems: InventoryItem[]

  constructor(inventoryItems: InventoryItem[]) {
    this.inventoryItems = inventoryItems
  }

  getOutItem(name: string, quantity: number): Product {
    let inventoryItem = this.inventoryItems.find(item => item.product.name === name)
    inventoryItem.quantity -= quantity
    return inventoryItem.product
  }
}

export class InventoryItem {
  product: Product
  quantity: number
}
