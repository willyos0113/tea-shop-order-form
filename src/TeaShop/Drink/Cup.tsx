import type { FC } from "react";
import type { Item } from "../models/Item";

interface Props {
  item: Item;
}

export const Cup: FC<Props> = () => {
  return <div className="cup" style={{ width: 250, height: 400 }}></div>;
};
