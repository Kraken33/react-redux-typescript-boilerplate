import React from "react";
import { Switch } from "react-router-dom";
import { routes } from "./routes-tree";
import { loadable } from "./loadable";
import { buildRoutes } from "./build-routes";
import { history, getLocation } from "./history";

const RoutesSwitch: React.FC = () => <Switch>{buildRoutes(routes)}</Switch>;

export {
  routes, loadable, RoutesSwitch, history, getLocation
};
