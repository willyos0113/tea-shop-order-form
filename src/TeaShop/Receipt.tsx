import { useState, type FC } from "react";
import type { Order } from "./models/Order";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

export const Receipt: FC = () => {
  // 從 URL 取出排隊序號
  const { orderNumber } = useParams();
  const ordersJson = sessionStorage.getItem(orderNumber!);
  if (ordersJson === null)
    return (
      <h1 className="is-size-3 has-text-weight-bold">
        Order number not found!!
      </h1>
    );
  const orders = JSON.parse(ordersJson) as Order[];

  // 價格加總
  const totalPrice = (orders: Order[]) =>
    orders.reduce((total, order) => total + order.price * order.quantity, 0);

  return (
    <div className="receipt">
      <div className="columns is-centered">
        <div className="column">
          {/* 訂單表頭 */}
          <div className="columns is-mobile has-text-weight-bold is-size-7 mb-2">
            <div className="column is-1"></div>
            <div className="column is-1">訂購人</div>
            <div className="column is-1">茶品</div>
            <div className="column is-1">奶蓋</div>
            <div className="column is-1">配料</div>
            <div className="column is-1">容量</div>
            <div className="column is-1">甜度</div>
            <div className="column is-1">冰塊</div>
            <div className="column is-1">數量</div>
            <div className="column is-auto"></div>
            <div className="column is-2">
              <FontAwesomeIcon icon={faSackDollar} />
            </div>
          </div>
          <hr className="my-2" />

          {/* 訂單內容 */}
          {orders.map((order) => (
            <div className="columns is-mobile is-size-7" key={order.id}>
              <div className="column is-1"></div>
              <div className="column is-1">{order.customer}</div>
              <div className="column is-1">{order.tea}</div>
              <div className="column is-1">
                {order.withFoam ? (
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                ) : null}
              </div>
              <div className="column is-1">{order.toppings.join(", ")}</div>
              <div className="column is-1">{order.size}</div>
              <div className="column is-1">{order.sugar}</div>
              <div className="column is-1">{order.ice}</div>
              <div className="column is-1">{order.quantity}</div>
              <div className="column is-auto"></div>
              <div className="column is-2">NT$ {order.price}</div>
            </div>
          ))}
          {orders.length > 0 && <hr className="my-2" />}

          {/* 總計 */}
          <div className="has-text-right mt-4">
            <strong>合計: NT$ {totalPrice(orders)}</strong>
          </div>

          {/* 排隊資訊 */}
          <div className="columns mt-4">
            <div className="column has-text-centered">
              <p className="is-size-5">{new Date().toLocaleString()}</p>
              <p className="is-size-5">排隊序號</p>
              <p className="is-size-3 has-text-weight-bold">{orderNumber}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
