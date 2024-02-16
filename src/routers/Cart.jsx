import OrderSummary from "../components/OrderSummary";
import ShoppingCart from "../components/ShoppingCart";
import CheckoutModal from "../components/CheckoutModal";
import { useSelector } from "react-redux";
const Cart = () => {
  const checkout = useSelector((state) => state.checkout);
  return (
    <>
      <div className="container bg-gray-100 mx-auto mt-10">
        <div className="flex shadow-md my-10">
          {checkout && <CheckoutModal />}
          <ShoppingCart />
          <OrderSummary />
        </div>
      </div>
    </>
  );
};

export default Cart;
