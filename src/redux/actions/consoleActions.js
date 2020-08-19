import {
  MAKE_SENDSAY_REQUEST,
  RECEIVE_SENDSAY_RESPONSE,
  REMOVE_REQUEST_FROM_HISTORY,
  CLEAR_REQUEST_HISTORY,
  SET_CONSOLE_RATIO,
  SET_CONSOLE_INPUT_VALUE
} from "./actionTypes";
import sendsayApi from "../../api/sendsayApi";

export const makeSendsayRequest = () => ({
  type: MAKE_SENDSAY_REQUEST
});

export const receiveSendsayResponse = payload => ({
  type: RECEIVE_SENDSAY_RESPONSE,
  payload
});

export const removeRequestFromHistory = requestBody => ({
  type: REMOVE_REQUEST_FROM_HISTORY,
  requestBody
});

export const clearRequestHistory = () => ({
  type: CLEAR_REQUEST_HISTORY
});

export const setConsoleRatio = ratio => ({
  type: SET_CONSOLE_RATIO,
  ratio
});

export const setConsoleInputValue = value => ({
  type: SET_CONSOLE_INPUT_VALUE,
  value
});

export const submitRequest = request => async dispatch => {
  dispatch(makeSendsayRequest());
  const parsedRequest = JSON.parse(request);
  const payload = {
    action: parsedRequest.action || "[no-action]",
    body: request,
    response: ""
  };
  try {
    payload.response = await sendsayApi.request(parsedRequest);
    payload.successful = true;
  } catch (err) {
    payload.successful = false;
    payload.response = err;
  } finally {
    payload.response = JSON.stringify(payload.response, null, 2);
    dispatch(receiveSendsayResponse(payload));
  }
};
