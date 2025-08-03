import "bulma/css/bulma.min.css";
import { Form } from "./TeaShop/Form";
import { OrderList } from "./TeaShop/OrderList";

export const App = () => {
  return (
    <>
      <section className="app section is-max-desktop">
        <Form />
        <OrderList />
      </section>
    </>
  );
};
