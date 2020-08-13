import { SESSION_RECEIVED } from "../actions/actionTypes";

const initialState = {
  login: "",
  sublogin: "",
  session: ""
};

export default function userData(state = initialState, action = {}) {
  switch (action.type) {
    case SESSION_RECEIVED:
      return { ...state, ...action.userData };
    default:
      return state;
  }
}
