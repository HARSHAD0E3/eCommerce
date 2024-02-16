import { useDispatch } from "react-redux";
import { cartItemActions } from "../store/cartItemSlice";
//import { useState } from "react";
import { Link } from "react-router-dom";
import { orderSummaryActions } from "../store/orderSummarySlice";
/* eslint-disable react/prop-types */
const CartItem = ({ cartItem }) => {
  // [value, setValue] = useState(1);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(
      cartItemActions.updateCartItem({
        id: cartItem.id,
        image: cartItem.image,
        item_name: cartItem.item_name,
        price: cartItem.price,
        comp_name: cartItem.company,
        quantity: cartItem.quantity + 1,
      })
    );
    dispatch(
      orderSummaryActions.incrementTotal({ quantity: 1, price: cartItem.price })
    );
  };
  const handleDecrement = () => {
    if (cartItem.quantity > 1) {
      dispatch(
        cartItemActions.updateCartItem({
          id: cartItem.id,
          image: cartItem.image,
          item_name: cartItem.item_name,
          price: cartItem.price,
          comp_name: cartItem.company,
          quantity: cartItem.quantity - 1,
        })
      );
      dispatch(
        orderSummaryActions.decrementTotal({
          quantity: 1,
          price: cartItem.price,
        })
      );
    }
  };

  const handleRemove = () => {
    dispatch(
      cartItemActions.removeCartItem({
        id: cartItem.id,
      })
    );
    dispatch(
      orderSummaryActions.decrementTotal({
        quantity: cartItem.quantity,
        price: cartItem.price,
      })
    );
  };

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={cartItem.image} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{cartItem.item_name}</span>
          <span className="text-red-500 text-xs">{cartItem.company}</span>
          <Link
            to="#"
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
            onClick={handleRemove}
          >
            Remove
          </Link>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg
          className="fill-current text-gray-600 w-3"
          viewBox="0 0 448 512"
          onClick={handleDecrement}
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <input
          className="mx-2 border text-center w-8"
          type="text"
          value={cartItem.quantity}
          readOnly
        />

        <svg
          className="fill-current text-gray-600 w-3"
          viewBox="0 0 448 512"
          onClick={handleIncrement}
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        &#8377;{cartItem.price}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        &#8377;{cartItem.price * cartItem.quantity}
      </span>
    </div>
  );
};

export default CartItem;
