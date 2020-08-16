import {
  MAKE_SENDSAY_REQUEST,
  RECEIVE_SENDSAY_RESPONSE,
  REMOVE_REQUEST_FROM_HISTORY,
  CLEAR_REQUEST_HISTORY,
  SET_CONSOLE_RATIO,
  SET_CONSOLE_INPUT_VALUE
} from "../actions/actionTypes";

const initialState = {
  isFetching: false,
  isServerError: false,
  ratio: [50, 50],
  inputValue: "",
  outputValue: undefined,
  requests: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MAKE_SENDSAY_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_SENDSAY_RESPONSE: {
      const requestObj = {
        action: action.payload.action,
        body: action.payload.body,
        successful: action.payload.successful
      };
      const requests = [...state.requests].filter(
        item => item.body !== action.payload.body
      );
      if (requests.unshift(requestObj) > 15) {
        requests.pop();
      }
      return {
        ...state,
        isFetching: false,
        isServerError: !action.payload.successful,
        outputValue: action.payload.response,
        requests
      };
    }
    case REMOVE_REQUEST_FROM_HISTORY:
      return {
        ...state,
        requests: state.requests.filter(el => el.action !== action.name)
      };
    case CLEAR_REQUEST_HISTORY:
      return {
        ...state,
        requests: []
      };
    case SET_CONSOLE_RATIO:
      return { ...state, ratio: action.ratio };
    case SET_CONSOLE_INPUT_VALUE:
      return { ...state, inputValue: action.value };
    default:
      return state;
  }
};
