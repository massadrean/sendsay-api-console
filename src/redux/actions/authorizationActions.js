import { SESSION_RECEIVED, USER_LOGOUT } from "./actionTypes";
import sendsayApi from "../../api/sendsayApi";

const sessionReceived = userData => ({
  type: SESSION_RECEIVED,
  userData
});

export const requestSession = credentials => dispatch => {
  const { login, sublogin, password: passwd } = credentials;

  return sendsayApi
    .request({
      action: "login",
      login,
      sublogin,
      passwd
    })
    .then(res => {
      const userData = { session: res.session, login: res.login };
      if (sublogin) {
        userData.sublogin = sublogin;
      }
      sendsayApi.setSession(res.session);
      dispatch(sessionReceived(userData));
    });
};

export const checkSession = session => dispatch => {
  sendsayApi.setSession(session);
  return sendsayApi
    .request({
      action: "pong"
    })
    .then(() => {
      dispatch(sessionReceived({}));
    });
};

export const logoutAction = () => {
  sendsayApi.request({
    action: "logout"
  });
  return {
    type: USER_LOGOUT
  };
};
