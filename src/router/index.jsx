import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "../views/Home";
import Contact from "../views/Contact";
import ProductPage from "../views/ProductPage";
import NotFound from "../views/NotFound";
import { loaderProducts, loaderSmartphones } from "../config/DataLoader";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: loaderProducts,
        loader: loaderSmartphones,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/product',
        element: <ProductPage />,
      },
    ]
  },
]);