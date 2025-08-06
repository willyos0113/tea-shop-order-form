import {
  faCheck,
  faSackDollar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import type { Order } from "./models/Order";

interface OrderListProps {
  orders: Order[];
  removeOrder: (orderId: string) => void;
}

export const OrderList: FC<OrderListProps> = ({ orders, removeOrder }) => {
  const handleRemoveClick = (orderId: string) => () => {
    removeOrder(orderId);
  };
  return (
    <section className="order-list">
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

          {/* 訂單項目列表(一個 row) */}
          {orders.map((order) => (
            <div className="columns is-mobile is-size-7" key={order.id}>
              <div
                className="column is-1 has-text-centered"
                onClick={handleRemoveClick(order.id)}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faXmark} style={{ color: "red" }} />
              </div>
              <div className="column is-1">{order.customer}</div>
              <div className="column is-1">{order.tea}</div>
              <div className="column is-1">
                {order.withFoam ? (
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                ) : null}
              </div>
              <div className="column is-1">{order.toppings}</div>
              <div className="column is-1">{order.size}</div>
              <div className="column is-1">{order.sugar}</div>
              <div className="column is-1">{order.ice}</div>
              <div className="column is-1">{order.quantity}</div>
              <div className="column is-auto"></div>
              <div className="column is-2">NT$ {order.price}</div>
            </div>
          ))}

          {/* 總計 */}
          <div className="has-text-right mt-4">
            <strong>Total: $0</strong>
          </div>

          {/* 送出按鈕 */}
          <div className="has-text-right mt-4">
            <button className="button is-link">送出</button>
          </div>
        </div>
      </div>
    </section>
  );
};
