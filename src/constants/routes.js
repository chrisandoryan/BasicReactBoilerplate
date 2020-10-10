import Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import Vendor from "../pages/Vendor/index";

export const LOGIN = "/login";
export const REGISTER = "/register";
export const HOME = "/";
export const CONCERT = "/concert/:id";
export const VENDOR = "/vendor";

export const routes = [
  {
    name: "Login",
    path: LOGIN,
    component: Login,
  },
  {
    name: "Register",
    path: REGISTER,
    component: null,
  },
  {
    name: "Home",
    path: HOME,
    component: Home,
  },
  {
    name: "Concert",
    path: CONCERT,
    component: null,
  },
  {
    name: "Vendor",
    path: VENDOR,
    component: Vendor,
  },
];