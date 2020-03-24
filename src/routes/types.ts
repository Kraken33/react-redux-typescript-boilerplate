import React from "react";
import { RouteProps } from "react-router";
import {  LayoutsType } from 'layouts/types';

export type Breadcrumb = null | string | React.ReactNode;

export interface IRoute extends RouteProps {
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