import { SESSION_RECEIVED, USER_LOGOUT } from "./actionTypes";
import sendsayApi from "../../api/sendsayApi";

const sessionReceived = userData => ({
  type: SESSION_RECEIVED,
  userData
});

export const requestSession = credentials => async dispatch => {
  const { login, sublogin, password: passwd } = credentials;
  const response = await sendsayApi.request({
    action: "login",
    login,
    sublogin,
    passwd
  });
  const userData = { session: response.session, login: response.login };

  if (sublogin) {
    userData.sublogin = sublogin;
  }

  sendsayApi.setSession(response.session);
  dispatch(sessionReceived(userData));
};

export const checkSession = session => async dispatch => {
  sendsayApi.setSession(session);
  await sendsayApi.request({
    action: "pong"
  });
  dispatch(sessionReceived({}));
};

export const logoutAction = () => {
  sendsayApi.request({
    action: "logout"
  });
  return {
    type: USER_LOGOUT
  };
};
