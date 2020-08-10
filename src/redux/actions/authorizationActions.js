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
      const userData = { session: res.session, login: res.login };
      if (sublogin) {
        localStorage.setItem("show-sublogin", true);
        userData.sublogin = sublogin;
      }
      dispatch(sessionReceived(userData));
    });
};

export const checkSession = session => dispatch => {
  sendsayApi.setSession(session);
  return sendsayApi
    .request({
      action: "pong"
    })
    .then(res => {
      const userData = { session, login: res.account };
      const sublogin = localStorage.getItem("show-sublogin");
      if (sublogin) {
        userData.sublogin = res.sublogin;
      }
      dispatch(sessionReceived(userData));
    });
};

export const logoutAction = () => {
  localStorage.removeItem("sendsay-session");
  localStorage.removeItem("show-sublogin");
  sendsayApi.request({
    action: "logout"
  });
  return {
    type: LOGOUT
  };
};
