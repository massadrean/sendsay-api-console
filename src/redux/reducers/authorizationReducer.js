import { SESSION_RECEIVED, LOGOUT } from "../actions/actionTypes";

const initialState = {
  login: "",
  sublogin: "",
  session: ""
};

export default function userData(state = initialState, action = {}) {
  switch (action.type) {
    case SESSION_RECEIVED:
      return action.userData;
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
