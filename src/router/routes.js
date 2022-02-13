import LandingPage from "../pages/main-landing-page/main";
import Login from "../pages/Authentication/Login/Login";
import Register from '../pages/Authentication/Register/register'

import { Redirect } from "react-router-dom";

const publicRoutes = [
 
  { path: "/login", component: Login },
  { path: '/register', component: Register },
  { path: "/",exact: true, component: LandingPage },
];
const AuthProtectedRoutes = [];

export { publicRoutes, AuthProtectedRoutes };
