import { BiSearch, BiUser, BiHeart, BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const { totalItems } = useSelector((state) => state.orderSummary);
  return (
    <header className="header h-20 flex bg-white items-center justify-between fixed top-0 w-full min-h-max z-50 px-12 border-b border-gray-300 shadow-2xl">
      <nav className="flex-grow">
        <ul className="flex w-3/4 font-mono min-w-52">
          <li className="mr-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="mr-8">
            <Link to="/shop-all" className="nav-link text-nowrap">
              Shop All
            </Link>
          </li>
          <li className="mr-8">
            <Link to="men" className="nav-link">
              Men
            </Link>
          </li>
          <li className="mr-8">
            <Link to="/women" className="nav-link">
              Women
            </Link>
          </li>
          <li className="mr-8">
            <a href="#" className="nav-link">
              Sale
            </a>
          </li>
        </ul>
      </nav>
      <div className="">
        <Link to="/">
          <img src="images/logo01.png" className="w-40 mr-10 min-w-40" alt="" />
        </Link>
      </div>
      <div className="flex justify-end flex-grow">
        <div className="flex justify-end w-2/3 mr-6 ">
          <input
            type="text"
            placeholder="Search here..."
            className="h-10 p-2 w-2/3 rounded-l-xl border-none search-bar"
          />
          <Link to="#">
            <BiSearch
              size={40}
              className="p-2 bg-white rounded-r-xl  search-bar"
            ></BiSearch>
          </Link>
        </div>
        <div className="flex ">
          <Link to="#" className="mr-6 profile">
            <BiUser size={30}></BiUser>
          </Link>
          <Link to="#" className="mr-6 wishlist ">
            <BiHeart size={30}></BiHeart>
          </Link>
          <Link to="/cart">
            <div>
              <BiCart size={34}></BiCart>
              <span className="relative bg-red-500 bottom-11 z-50  text-white border rounded-full text-xs p-0.5 px-2 left-5">
                {totalItems}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
