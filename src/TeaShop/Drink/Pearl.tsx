import type { FC } from "react";
import { Addon, Shape } from "./Addon";
import chroma from "chroma-js";
import _ from "lodash";

export const Pearl: FC = () => {
  return (
    <Addon
      width={20}
      shape={Shape.CIRCULAR}
      color={chroma("#471f08").alpha(0.9)}
    />
  );
};
