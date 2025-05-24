export interface Product {
  id: number;
  name: string;
  newPrice?: number;
  price: number;
  description: string;
  image?: string;
}

export interface Cart {
  items: number[];
  add(id: number): void;
  remove(id: number): void;
}
