import Concert from "../pages/Concert";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const LOGIN = "/login";
export const REGISTER = "/register";
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
    component: Concert,
  },
];