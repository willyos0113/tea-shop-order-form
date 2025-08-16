import type { FC } from "react";
import { Addon, Shape } from "./Addon";
import chroma from "chroma-js";
import _ from "lodash";

export const Ice: FC = () => {
  return (
    <Addon
      width={45}
      shape={Shape.SQUARE}
      color={chroma("lightgrey").alpha(_.random(0.3, 0.6))}
    />
  );
};
