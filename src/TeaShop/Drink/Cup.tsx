import type { FC } from "react";
import type { Item } from "../models/Item";
import { Size } from "../models/Size";
import { Tea } from "./Tea";

interface Props {
  item: Item;
}

const height: Record<Size, number> = {
  [Size.LARGE]: 350,
  [Size.MEDIUM]: 300,
  [Size.SMALL]: 250,
};

export const Cup: FC<Props> = ({ item }) => {
  return (
    <div
      className="cup"
      style={{
        width: 250,
        height: height[item.size],
      }}
    >
      <Tea item={item} />
    </div>
  );
};
