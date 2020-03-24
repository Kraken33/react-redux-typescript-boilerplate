import React from "react";
import { Route } from "react-router-dom";
import { Layouts } from "layouts";
import {
    Routes
} from "./types";

const buildRoutes = (routes: Routes) => {
    const routeNames = Object.keys(routes) as Array<keyof Routes>;
return routeNames.map((key) => {
    const {layout, page: Page, ...rest} = routes[key];
    const Layout = Layouts[layout];

    return <Route
        key={rest.path}
        {...rest}
        render={(matchProps) => (
            <Layout>
                <Page {...matchProps} />
            </Layout>
        )}
    />
});
};

export { buildRoutes };
