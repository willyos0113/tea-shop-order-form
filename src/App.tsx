import "bulma/css/bulma.min.css";
import { Form } from "./TeaShop/Form";
import { OrderList } from "./TeaShop/OrderList";
import { useState, type FC } from "react";
import type { Order } from "./TeaShop/models/Order";

export const App: FC = () => {
  // Order[] 型態的狀態：動態地儲存含多筆資料的訂單
  const [orders, setOrders] = useState<Order[]>([]);

  // 新增按鈕：新增一筆 Order 型態資料
  const addOrder = (newOrder: Order) =>
    setOrders((prevOrders) => [...prevOrders, newOrder]);

  // 刪除按鈕：移除一筆 Order 型態資料
  const removeOrder = (orderId: string) =>
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );

  return (
    <div className="app section is-max-desktop">
      <Form addOrder={addOrder} />
      <OrderList orders={orders} removeOrder={removeOrder} />
    </div>
  );
};
