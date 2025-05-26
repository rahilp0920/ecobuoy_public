import React from 'react';
import Dashboard from "views/Dashboard/Dashboard";
import SignIn from "views/Auth/SignIn.js";
import { HomeIcon } from "components/Icons/Icons";

// Only the dashboard route for sidebar
var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  }
  // Do NOT include SignIn here; it is handled via route and will show from the header.
];

export default dashRoutes;
