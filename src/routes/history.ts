import { createBrowserHistory } from "history";

const history = createBrowserHistory({ basename: "/" });
const getLocation = () => history.location.pathname;

export { history, getLocation };
