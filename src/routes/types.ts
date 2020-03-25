import { LayoutsType } from "layouts/types";
import React from "react";
import { RouteProps } from "react-router";

export type Breadcrumb = null | string | React.ReactNode;

export interface IRoute {
  path: string;
  layout: keyof LayoutsType;
  page: any;
  breadcrumb: Breadcrumb;
  icon?: string;
  exact?: boolean;
  link(...args: any[]): string;
}

export interface IRouteWithReactRouter extends RouteProps {
  path: string;
  layout: keyof LayoutsType;
  page: any;
  breadcrumb: Breadcrumb;
  icon?: string;
  exact?: boolean;
  link(...args: any[]): string;
}

export interface IPagesTree {
  home: React.ComponentType;
}

export type Routes = {
  [key in keyof IPagesTree]: IRoute;
};
