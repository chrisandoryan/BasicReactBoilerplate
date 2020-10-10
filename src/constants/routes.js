import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";

export const LOGIN = "/login";
export const REGISTER = "/register";
export const LOGOUT = "/logout";
export const HOME = "/";
export const CONCERT = "/concert/:id";

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
    component: null,
  },
];