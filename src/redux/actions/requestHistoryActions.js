import { MAKE_REQUEST, ADD_REQUEST_TO_HISTORY } from "./actionTypes";
import sendsayApi from "../../api/sendsayApi";

export const makeRequest = () => ({
  type: MAKE_REQUEST
});

export const addRequestToHistory = requestInfo => ({
  type: ADD_REQUEST_TO_HISTORY,
  requestInfo
});

export const submitRequest = request => dispatch => {
  dispatch(makeRequest());
  const requestInfo = {
    action: request.action,
    body: request
  };
  sendsayApi
    .request(request)
    .then(res => {
      requestInfo.successful = true;
      requestInfo.response = res;
    })
    .catch(err => {
      requestInfo.successful = false;
      requestInfo.response = err;
    })
    .finally(() => {
      dispatch(addRequestToHistory(requestInfo));
    });
};
