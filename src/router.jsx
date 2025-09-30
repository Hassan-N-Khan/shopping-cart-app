import { createBrowserRouter} from "react-router-dom";
import App from "./components/App.jsx";
import Shop from "./components/Shop.jsx";
import Cart from "./components/Cart.jsx";
import "./index.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);