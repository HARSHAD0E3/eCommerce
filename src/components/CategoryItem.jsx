/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function CategoryItem({ category }) {
  return (
    <div className="h-96 w-96 m-6">
      <Link
        className="relative mx-3 mt-3 flex overflow-hidden rounded-xl"
        to="#"
      >
        <img
          className="object-cover"
          src={category.image}
          alt="product image"
        />
        <span className="absolute top-1/2 left-0 m-2 px-2 text-center text-5xl font-medium text-white">
          {category.category_name}
        </span>
      </Link>
      {/* <img src={category.image} alt="" />
      <span className="absolute left-1/2 top-1/2 text-5xl">
        
      </span> */}
    </div>
  );
}
export default CategoryItem;
