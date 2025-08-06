import type { Item } from "./Item";

export interface Order extends Item {
  customer: string;
  id: string;
  price: number;
}
