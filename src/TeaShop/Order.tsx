import { useState, type FC } from "react";
import type { Order as OrderModel } from "./models/Order";
import { Form } from "./Form";
import { OrderList } from "./OrderList";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

export const Order: FC = () => {
  // orders 狀態：儲存含多筆資料的訂單
  const [orders, setOrders] = useState<OrderModel[]>([]);

  // 新增按鈕：新增一筆 Order 型態資料
  const addOrder = (newOrder: OrderModel) =>
    setOrders((prevOrders) => [...prevOrders, newOrder]);

  // 刪除按鈕：移除一筆 Order 型態資料
  const removeOrder = (orderId: string) =>
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );

  // 在 URL 之間導航
  const navigate = useNavigate();

  // 送出按鈕
  const placeOrder = () => {
    // (1) 將資料放入 session storage
    const orderNumber = _.random(9999).toString().padStart(4, "0");
    sessionStorage.setItem(orderNumber, JSON.stringify(orders));
    // (2) 導航到 'receipt'
    navigate(`../receipt/${orderNumber}`);
  };

  return (
    <div>
      <Form addOrder={addOrder} />
      <OrderList
        orders={orders}
        removeOrder={removeOrder}
        placeOrder={placeOrder}
      />
    </div>
  );
};
