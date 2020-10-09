import { combineReducers } from "redux";
import { USER_LOGOUT } from "../actions/actionTypes";

import userData from "./authorizationReducer";
import console from "./consoleReducer";

const appReducer = combineReducers({
  userData,
  console
});

export default (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
