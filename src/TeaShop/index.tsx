import { useState, type ChangeEvent, type FC } from "react";
import { Link } from "react-router-dom";

export const Index: FC = () => {
  const [orderNumber, setOrderNumber] = useState<string>("");
  const handleOrderNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrderNumber(e.target.value);
  };
  return (
    <div>
      <div className="hero is-info">
        <div className="hero-body">
          <p className="title">我的飲料店</p>
          <p className="subtitle">新北市民族路1234號</p>
        </div>
      </div>
      <div className="mt-6">
        <div className="field has-addons has-addons-centered">
          <p className="control">
            <input
              className="input is-medium"
              type="text"
              placeholder="訂單序號 #"
              value={orderNumber}
              onChange={handleOrderNumberChange}
            />
          </p>
          <p className="control">
            <a className="button is-medium is-warning">追蹤訂單</a>
          </p>
        </div>
      </div>
      <div className="has-text-centered mt-6">
        {/* <Link> 來重新渲染，而不重新發請求 */}
        <Link className="button is-primary is-medium" to="order">
          點飲料去
        </Link>
      </div>
    </div>
  );
};
