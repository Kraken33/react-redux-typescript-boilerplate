import "assets/scss/index.scss";
import "assets/scss/index.scss";

/*eslint-disable react-hooks/exhaustive-deps*/
import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { RoutesSwitch } from "routes";

import { IProps } from "./types";

const View: React.FC<IProps> = () => {
  return (
    <Fragment>
      <Helmet defaultTitle={`${'NAME'}`} titleTemplate={`%s | ${'NAME'}`} />
      <RoutesSwitch />
    </Fragment>
  );
};

export { View };
