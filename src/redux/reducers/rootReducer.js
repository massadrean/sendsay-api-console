import { combineReducers } from "redux";
import { USER_LOGOUT } from "../actions/actionTypes";

import userData from "./authorizationReducer";
import requestHistory from "./requestHistoryReducer";
import console from "./consoleReducer";

const appReducer = combineReducers({
  userData,
  requestHistory,
  console
});

export default (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
