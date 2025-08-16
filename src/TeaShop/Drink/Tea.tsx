import type { FC } from "react";
import { Tea as Tae } from "../models/Tea";
import type { Item } from "../models/Item";
import { Foam } from "./Foam";
import { Ice } from "./Ice";
import _ from "lodash";
import { Boba } from "./Boba";
import { Pearl } from "./Pearl";
import { Jelly } from "./Jelly";
import { Topping } from "../models/Topping";

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

// 冰塊數量係數
const ICE_FACTOR = 7;

// 根據選擇配料，決定 topping-layer 應該加入甚麼?
const toppingLayerBuilder = (toppings: Topping[]) => {
  const manual: Record<Topping, [FC, number]> = {
    [Topping.BOBA]: [Boba, 10],
    [Topping.PEARL]: [Pearl, 20],
    [Topping.JELLY]: [Jelly, 20],
  };
  return _.shuffle(
    toppings
      .map((t) => manual[t])
      .flatMap(([T, q]) => _.times(q, () => T))
      .map((T, i) => <T key={i} />)
  );
};

interface Props {
  item: Item;
}

export const Tea: FC<Props> = ({ item }) => {
  return (
    <div className="tea" style={{ background: color[item.tea] }}>
      {/* 奶蓋區域 */}
      {item.withFoam && <Foam />}

      {/* 冰塊區域 */}
      <div className="ice-layer">
        {/* 生成一個 [0 ~ item.ice] 陣列 */}
        {_.range(item.ice * ICE_FACTOR).map((i) => (
          <Ice key={i} />
        ))}
      </div>

      {/* 配料區域 */}
      <div className="topping-layer">{toppingLayerBuilder(item.toppings)}</div>
    </div>
  );
};
