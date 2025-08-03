import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

export const OrderList: FC = () => {
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
            <div className="column is-1">
              <FontAwesomeIcon icon={faSackDollar} />
            </div>
          </div>

          <hr className="my-2" />

          {/* 訂單項目列表 - 空白狀態 */}
          <div>{/* 這裡可以放置靜態的示例訂單項目 */}</div>

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
