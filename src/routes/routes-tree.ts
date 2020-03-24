import { IRoutesTree, ELayoutTypes } from "./types";
import { pages } from "./pages";

const routes: IRoutesTree = {
  home: {
    path: `/`,
    layout: ELayoutTypes.BASE,
    page: pages.home,
    get breadcrumb() {
      return "Home";
    },
    link: () => "/",
    exact: true
  }
};

export { routes };
