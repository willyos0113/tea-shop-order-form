import "bulma/css/bulma.min.css";
import { Form } from "./TeaShop/Form";
import { OrderList } from "./TeaShop/OrderList";

export const App = () => {
  return (
    <>
      <div className="section is-max-desktop">
        <Form />
        <OrderList />
      </div>
    </>
  );
};
