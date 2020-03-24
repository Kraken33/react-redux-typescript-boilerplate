import { Routes } from "./types";
import { pages } from "./pages";
import { ELayouts } from 'layouts';

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
