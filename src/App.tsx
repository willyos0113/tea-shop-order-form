import "bulma/css/bulma.min.css";
import { Form } from "./TeaShop/Form";
import { OrderList } from "./TeaShop/OrderList";
import { useState, type FC } from "react";
import type { Order } from "./TeaShop/models/Order";
import { Receipt } from "./TeaShop/Receipt";

export const App: FC = () => {
  // orders 狀態：儲存含多筆資料的訂單
  const [orders, setOrders] = useState<Order[]>([]);

  // 新增按鈕：新增一筆 Order 型態資料
  const addOrder = (newOrder: Order) =>
    setOrders((prevOrders) => [...prevOrders, newOrder]);

  // 刪除按鈕：移除一筆 Order 型態資料
  const removeOrder = (orderId: string) =>
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );

  // isPlace 狀態處理：控制訂單成立與否?
  const [isPlace, setIsPlace] = useState<boolean>(false);

  // 送出按鈕：送出訂單(同時抽序號、紀錄時間)
  const [orderTime, setOrderTime] = useState<Date | null>(null);
  const [queueNumber, setQueueNumber] = useState<number | null>(null);
  const placeOrder = () => {
    setOrderTime(new Date());
    setQueueNumber(487);
    setIsPlace(true);
  };

  return (
    <div className="app section is-max-desktop">
      {!isPlace ? (
        <>
          <Form addOrder={addOrder} />
          <OrderList
            orders={orders}
            removeOrder={removeOrder}
            placeOrder={placeOrder}
          />
        </>
      ) : (
        <Receipt
          orders={orders}
          orderTime={orderTime}
          queueNumber={queueNumber}
        />
      )}
    </div>
  );
};
