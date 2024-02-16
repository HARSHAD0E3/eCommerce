/* eslint-disable react/prop-types */
import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartItemActions } from "../store/cartItemSlice";
import { orderSummaryActions } from "../store/orderSummarySlice";
import StarRatings from "react-star-ratings";

const Item = ({ items }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      cartItemActions.addCartItem({
        id: items.id,
        image: items.image,
        item_name: items.item_name,
        price: items.current_price,
        comp_name: items.company,
        quantity: 1,
      })
    );
    dispatch(
      orderSummaryActions.incrementTotal({
        quantity: 1,
        price: items.current_price,
      })
    );
  };

  return (
    <div className="relative m-6 flex w-full max-w-xs min-w-72 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link
        className="relative mx-3 mt-3 flex overflow-hidden rounded-xl"
        to="#"
      >
        <img
          className="object-cover h-96 w-full"
          src={items.image}
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {items.discount_percentage}% OFF
        </span>
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link to="#">
          <div className="h-16">
            <h5 className="text-xl tracking-tight text-slate-900">
              {items.item_name}
            </h5>
          </div>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              &#8377;{items.current_price}
            </span>
            <span className="text-sm text-slate-900 line-through">
              &#8377;{items.original_price}
            </span>
          </p>
          <div className="flex items-center">
            <StarRatings
              rating={items.rating.stars}
              starDimension="18px"
              starSpacing="0px"
              starRatedColor="yellow"
            />

            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {items.rating.count}
            </span>
          </div>
        </div>
        <Link
          to="#"
          className="flex items-center  justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={handleClick}
        >
          <PiShoppingCartBold className="mr-2 h-6 w-6" />
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default Item;
