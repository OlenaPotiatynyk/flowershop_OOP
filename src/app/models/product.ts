export interface Product {
  type: string
  name: string
  price: number
  photoUrl: string
}

export interface Seed extends Product {
  weight: number
}

export interface CutFlowers extends Product {
  height: number
}

export interface Plant extends Product {
  potColor: string
}
