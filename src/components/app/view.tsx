import "assets/scss/index.scss";
import "assets/scss/index.scss";

import { APP } from "constants/index";
import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { RoutesSwitch } from "routes";

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
