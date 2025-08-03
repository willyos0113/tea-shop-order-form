import type { FC } from "react";
import { Tea as Tae } from "../models/Tea";
import type { Item } from "../models/Item";
import { Foam } from "./Foam";

const color: Record<Tae, string> = {
  [Tae.BLACK_TEA]: "#cc6600",
  [Tae.MILK_TEA]: "#ffcc99",
  [Tae.GREEN_TEA]: "#ffe066",
  [Tae.GREEN_MILK_TEA]: "#ffeb99",
  [Tae.OOLONG]: "#ffbf00",
  [Tae.OOLONG_MILK]: "#ffdf80",
  [Tae.MATCHA]: "#99cc00",
  [Tae.MATCHA_MILK]: "#c2f0c2",
};

interface Props {
  item: Item;
}

export const Tea: FC<Props> = ({ item }) => {
  return (
    <div className="tea" style={{ background: color[item.tea] }}>
      {item.withFoam && <Foam />}
    </div>
  );
};
