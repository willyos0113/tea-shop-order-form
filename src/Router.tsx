import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Receipt } from "./TeaShop/Receipt";
import { Order } from "./TeaShop/Order";
import { TeaShop } from "./TeaShop/TeaShop";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 2層以上(含)的<Route>，需在第一層的<TeaShop>中安插一個 <Outlet>來切換下方頁面 */}
        <Route path="/" element={<TeaShop />}>
          <Route path="order" element={<Order />} />
          <Route path="receipt/:orderNumber" element={<Receipt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
