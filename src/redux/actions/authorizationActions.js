import { SESSION_RECEIVED, LOGOUT } from "./actionTypes";
import sendsayApi from "../../api/sendsayApi";

const sessionReceived = ({ session, login, sublogin }) => ({
  type: SESSION_RECEIVED,
  userData: { session, login, sublogin }
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
      localStorage.setItem("sendsay-session", res.session);
      dispatch(sessionReceived(res));
    });
};

export const checkSession = session => dispatch => {
  sendsayApi.setSession(session);
  return sendsayApi
    .request({
      action: "pong"
    })
    .then(res => {
      const userData = { session, login: res.account, sublogin: res.sublogin };
      dispatch(sessionReceived(userData));
    });
};

export const userLoggedOut = () => ({
  type: LOGOUT
});
