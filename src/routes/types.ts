import React from "react";
import { RouteProps } from "react-router";

export enum ELayoutTypes {
  BASE = "BASE",
  EMPTY = "EMPTY"
}

export type Breadcrumb = null | string | React.ReactNode;

export interface IRoute extends RouteProps {
  path: string;
  layout: ELayoutTypes;
  page: any;
  breadcrumb: Breadcrumb;

  icon?: string;
  sidebarText?: string; // @TODO => Надо ли это вообще?
  exact?: boolean;
  link(...args: any[]): string;
}

export interface IPreparedRoutesForBreadcrumbs
  extends Pick<IRoute, "path" | "breadcrumb"> {}



export interface IRoutesTree {
  home: IRoute;
}

export interface IPagesTree {
  home: any;
}
