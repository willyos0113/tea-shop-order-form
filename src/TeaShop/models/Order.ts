import type { Item } from "./Item";

export interface Order extends Item {
  id: string;
  price: number;
}
