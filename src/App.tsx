import "bulma/css/bulma.min.css";
import type { FC } from "react";
import { Router } from "./Router";

export const App: FC = () => {
  return (
    // 將 <Router> 元件放在最外層 <App> 當中
    <Router />
  );
};
