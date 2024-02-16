import { useDispatch } from "react-redux";
import { checkoutActions } from "../store/checkoutSlice";
import { cartItemActions } from "../store/cartItemSlice";
import { orderSummaryActions } from "../store/orderSummarySlice";

function CheckoutModal() {
  const dispatch = useDispatch();
  const handleHide = () => {
    dispatch(checkoutActions.showPopup());
    dispatch(cartItemActions.onCheckout());
    dispatch(orderSummaryActions.onCheckout());
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="min-h-screen px-4 text-center">
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Your order has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={handleHide}
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutModal;
