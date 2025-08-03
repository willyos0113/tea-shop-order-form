import type { Item } from "../models/Item";
import { Cup } from "./Cup";
import "./Drink.scss";
import type { FC } from "react";

interface Props {
  item: Item;
}

export const Drink: FC<Props> = ({ item }) => {
  return (
    <div className="drink">
      <Cup item={item} />
    </div>
  );
};
