import HomePage from "../pages/HomePage";
import NotFouncPage from "../pages/NotFouncPage";
import OrderPage from "../pages/OrderPage";
import ProductsPage from "../pages/ProductsPage";

export const routes = [
  {
    path: "/",
    name: "Home",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/products",
    name: "products",
    page: ProductsPage,
    isShowHeader: true,
  },
  {
    path: "/order",
    name: "Order",
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: "*",
    name: "NotFounc",
    page: NotFouncPage,
  },
];
