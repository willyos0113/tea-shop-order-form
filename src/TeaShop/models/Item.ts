import type { Size } from "./Size";
import type { Tea } from "./Tea";
import type { Topping } from "./Topping";

// 限制甜度及冰塊數值
export const SUGAR_LEVELS = 5;
export const ICE_LEVELS = 4;

export interface Item {
  tea: Tea;
  withFoam: boolean;
  size: Size;
  sugar: number;
  ice: number;
  toppings: Topping[];
  qantity: number;
}
