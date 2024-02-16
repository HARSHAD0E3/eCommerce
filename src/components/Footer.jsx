import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
          <div className="p-5">
            <Link to="/">
              <img src="images/logo01.png" className="w-40 mr-10" alt="" />
            </Link>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-indigo-600 font-bold">
              About
            </div>
            <Link className="my-3 block" to="#">
              Infinity8 Clothing Pvt. Ltd.
              <span className="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link className="my-3 block" to="#">
              Explore to CHANGE.{" "}
              <span className="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link className="my-3 block" to="#">
              Learn More <span className="text-teal-600 text-xs p-1">New</span>
            </Link>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-indigo-600 font-bold">
              POLICIES
            </div>

            <Link className="my-3 block" to="#">
              Return Your Order{" "}
              <span className="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link className="my-3 block" to="#">
              Return, Refund, and Cancellation{" "}
              <span className="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link className="my-3 block" to="#">
              Shipping Policy{" "}
              <span className="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link className="my-3 block" to="#">
              Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
            </Link>
            <Link className="my-3 block" to="#">
              Terms and Conditions
              <span className="text-teal-600 text-xs p-1"></span>
            </Link>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-indigo-600 font-bold">
              Contact us
            </div>
            <Link className="my-3 block" to="/contact-us">
              Write us at support@infinity8.com
              <span className="text-teal-600 text-xs p-1"></span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center"
        >
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <Link to="#" className="w-6 mx-1">
              {" "}
              <AiFillInstagram size={20} />
            </Link>
            <Link to="#" className="w-6 mx-1">
              <AiFillFacebook size={20} />
            </Link>
            <Link to="#" className="w-6 mx-1">
              {" "}
              <AiFillTwitterCircle size={20} />
            </Link>
          </div>
          <div className="my-5">©2024 Infinity8. All Rights Reserved.</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
