import "bulma/css/bulma.min.css";
import { Form } from "./TeaShop/Form";
import { OrderList } from "./TeaShop/OrderList";
import type { FC } from "react";

export const App: FC = () => {
  return (
    <div className="app section is-max-desktop">
      <Form />
      <OrderList />
    </div>
  );
};
