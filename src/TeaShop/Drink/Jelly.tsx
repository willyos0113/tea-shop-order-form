import type { FC } from "react";
import { Addon, Shape } from "./Addon";
import chroma from "chroma-js";
import _ from "lodash";

const COLORS = ["red", "white", "orange", "yellow", "green"];

export const Jelly: FC = () => {
  return (
    <Addon
      width={30}
      shape={Shape.RECTANGLE}
      color={chroma(_.sample(COLORS)!).alpha(0.7)}
    />
  );
};
