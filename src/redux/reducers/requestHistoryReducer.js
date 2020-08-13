import { MAKE_REQUEST, ADD_REQUEST_TO_HISTORY } from "../actions/actionTypes";

const initialState = {
  isFetching: false,
  error: false,
  response: undefined,
  requests: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case ADD_REQUEST_TO_HISTORY: {
      const requestObj = {
        action: action.requestInfo.action,
        body: action.requestInfo.body,
        successful: action.requestInfo.successful
      };
      const requests = [...state.requests].filter(
        item => item.action !== action.requestInfo.action
      );
      if (requests.unshift(requestObj) > 15) {
        requests.pop();
      }
      return {
        ...state,
        isFetching: false,
        response: action.requestInfo.response,
        error: !action.requestInfo.successful,
        requests
      };
    }
    default:
      return state;
  }
};
