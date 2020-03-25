import { createBrowserHistory, History } from "history";

const history: History = createBrowserHistory({ basename: "/" });

export { history };
