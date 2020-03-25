import { ELayouts } from "layouts";

import { pages } from "./pages";
import { Routes } from "./types";

const routes: Routes = {
  home: {
    path: `/`,
    layout: ELayouts.EmptyLayout,
    page: pages.home,
    get breadcrumb() {
      return "Home";
    },
    link: () => "/",
    exact: true
  }
};

export { routes };
