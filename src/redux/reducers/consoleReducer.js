import { CHANGE_RATIO } from "../actions/actionTypes";

const initialState = {
  ratio: [50, 50]
};

export default function console(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_RATIO:
      return { ...state, ratio: action.ratio };
    default:
      return state;
  }
}
