import "bulma/css/bulma.min.css";
import { Form } from "./teaShop/Form";
import { OrderList } from "./teaShop/OrderList";

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
