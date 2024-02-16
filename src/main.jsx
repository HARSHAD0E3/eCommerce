import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routers/App.jsx";
import DisplayMsg from "./routers/DisplayMsg.jsx";
import Home from "./routers/Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./routers/Cart.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop-all", element: <DisplayMsg /> },
      { path: "/women", element: <DisplayMsg /> },
      { path: "/men", element: <DisplayMsg /> },
      { path: "/contact-us", element: <DisplayMsg /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
