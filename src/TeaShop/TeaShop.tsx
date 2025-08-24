import type { FC } from "react";
import { Outlet } from "react-router-dom";

export const TeaShop: FC = () => {
  return (
    <div className="tea-shop section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};
