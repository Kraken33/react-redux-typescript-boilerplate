import "assets/scss/index.scss";
import "assets/scss/index.scss";

import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { RoutesSwitch } from "routes";
import { APP } from 'constants/index';

import { IProps } from "./types";

const View: React.FC<IProps> = () => {
  return (
    <Fragment>
      <Helmet defaultTitle={`${APP.NAME}`} titleTemplate={`%s | ${APP.NAME}`} />
      <RoutesSwitch />
    </Fragment>
  );
};

export { View };
