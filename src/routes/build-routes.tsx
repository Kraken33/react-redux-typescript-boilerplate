import React from "react";
import { Route } from "react-router-dom";
import { Empty as EmptyLayout } from "layouts/empty";
import {
  ELayoutTypes
} from "./types";

const buildRoutes = (routes: any) => Object.keys(routes).map((key: string) => {
  const { layout, page: Page, ...rest } = routes[key];

  switch (layout) {
    case ELayoutTypes.EMPTY:
    default:
      return (
        <Route
          key={rest.path}
          {...rest}
          render={(matchProps) => (
            <EmptyLayout>
              <Page {...matchProps} />
            </EmptyLayout>
          )}
        />
      );
  }
});

export { buildRoutes };
