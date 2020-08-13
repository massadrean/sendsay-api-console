import React, { Suspense, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  checkSession,
  logoutAction
} from "./redux/actions/authorizationActions";
import GuestRoute from "./routes/GuestRoute";
import UserRoute from "./routes/UserRoute";
import "./App.css";

const LoginPage = React.lazy(() =>
  import(/* webpackChunkName: "LoginPage" */ "./components/pages/LoginPage")
);
const ConsolePage = React.lazy(() =>
  import(/* webpackChunkName: "ConsolePage" */ "./components/pages/ConsolePage")
);

const propTypes = {
  session: PropTypes.string,
  checkSessionThunkAction: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

function App({ session, checkSessionThunkAction, logout }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session) {
      setLoading(true);
      checkSessionThunkAction(session)
        .catch(() => {
          logout();
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [checkSessionThunkAction, session, logout]);

  return (
    <div className="App">
      { loading ? (
        <div className="preloader" />
      ) : (
        <Switch>
          <Suspense fallback={ <div className="preloader" /> }>
            <Route path="/" exact>
              { session ? <Redirect to="/console" /> : <Redirect to="/login" /> }
            </Route>
            <GuestRoute path="/login" exact component={ LoginPage } />
            <UserRoute path="/console" exact component={ ConsolePage } />
          </Suspense>
        </Switch>
      ) }
    </div>
  );
}

const mapStateToProps = state => ({
  session: state.userData.session
});

const mapDispatchToProps = dispatch => ({
  checkSessionThunkAction: session => dispatch(checkSession(session)),
  logout: () => {
    dispatch(logoutAction());
  }
});

App.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(App);
