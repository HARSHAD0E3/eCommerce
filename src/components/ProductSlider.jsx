/* eslint-disable react-refresh/only-export-components */
import { useSelector } from "react-redux";
import Item from "./Item";

const ProductSlider = () => {
  const itemList = useSelector((state) => state.items);
  return (
    <section>
      <div className="pt-10">
        <h2 className="text-5xl text-center tracking-tighter">
          DISCOVER BESTSELLERS
        </h2>
      </div>
      <div className="flex justify-center flex-wrap">
        {itemList.map((item) => (
          <Item key={item.id} items={item}></Item>
        ))}
      </div>
    </section>
  );
};

export default ProductSlider;
