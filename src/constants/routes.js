<<<<<<< HEAD
import Concert from "../pages/Concert";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";
import Vendor from "../pages/Vendor";

=======
import Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import Vendor from "../pages/Vendor/index";
>>>>>>> 26ad3ae6861912761f440eb250083ed853ddc10f

export const LOGIN = "/login";
export const REGISTER = "/register";
export const LOGOUT = "/logout";
export const HOME = "/";
export const CONCERT = "/concert/:id";
export const VENDOR = "/vendor";
<<<<<<< HEAD
export const VENDOR_ID = "/vendor/:id";
=======
>>>>>>> 26ad3ae6861912761f440eb250083ed853ddc10f

export const routes = [
  {
    name: "Login",
    path: LOGIN,
    component: Login,
  },
  {
    name: "Register",
    path: REGISTER,
    component: Register,
  },
  {
    name: "Logout",
    path: LOGOUT,
    component: Logout,
  },
  {
    name: "Home",
    path: HOME,
    component: Home,
  },
  {
    name: "Concert",
    path: CONCERT,
    component: Concert,
  },
  {
    name: "Vendor",
    path: VENDOR,
    component: Vendor,
  },
  {
    name: "Vendor",
    path: VENDOR,
    component: Vendor,
  },
];