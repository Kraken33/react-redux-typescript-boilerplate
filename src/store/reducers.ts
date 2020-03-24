import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import * as reducers from "./export-reducers";

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  ...reducers
});

export { createRootReducer };
