export interface Product {
  description: string;
  id: number;
  image?: string;
  isSold?: boolean;
  name: string;
  newPrice?: number;
  price: number;
}

export interface Cart {
  items: number[];
  add(id: number): void;
  remove(id: number): void;
}
