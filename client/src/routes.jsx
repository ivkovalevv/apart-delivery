import AdminPage from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import Cart from "./pages/Cart/Cart";
import MenuItemPage from "./pages/MenuItemPage/MenuItemPage";
import Shop from "./pages/Shop/Shop";
import Breakfasts from "./pages/Breakfasts/Breakfasts";
import Salads from "./pages/Salads/Salads";
import Hotter from "./pages/Hotter/Hotter";
import Desserts from "./pages/Desserts/Desserts";
import Snacks from "./pages/Snacks/Snacks";
import Drinks from "./pages/Drinks/Drinks";
import AboutUs from "./pages/AboutUs/AboutUs";
import Profile from "./pages/Profile/Profile";
import {
  ADMIN_ROUTE,
  CART_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  MENU_ITEM_ROUTE,
  BREAKFASTS_ROUTE,
  SALADS_ROUTE,
  HOTTER_ROUTE,
  DESSERTS_ROUTE,
  SNACKS_ROUTE,
  DRINKS_ROUTE,
  ABOUT_US_ROUTE,
  PROFILE_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <AdminPage></AdminPage>,
  },
  {
    path: CART_ROUTE,
    Component: <Cart></Cart>,
  },
  {
    path: PROFILE_ROUTE,
    Component: <Profile></Profile>,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: <Shop></Shop>,
  },
  {
    path: LOGIN_ROUTE,
    Component: <Auth></Auth>,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth></Auth>,
  },
  {
    path: MENU_ITEM_ROUTE + "/:id",
    Component: <MenuItemPage></MenuItemPage>,
  },
  {
    path: BREAKFASTS_ROUTE,
    Component: <Breakfasts></Breakfasts>,
  },
  {
    path: SALADS_ROUTE,
    Component: <Salads></Salads>,
  },
  {
    path: HOTTER_ROUTE,
    Component: <Hotter></Hotter>,
  },
  {
    path: DESSERTS_ROUTE,
    Component: <Desserts></Desserts>,
  },
  {
    path: SNACKS_ROUTE,
    Component: <Snacks></Snacks>,
  },
  {
    path: DRINKS_ROUTE,
    Component: <Drinks></Drinks>,
  },
  {
    path: ABOUT_US_ROUTE,
    Component: <AboutUs></AboutUs>,
  },
];
