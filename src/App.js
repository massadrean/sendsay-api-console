import React, { Suspense, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { checkSession } from "./redux/actions/authorizationActions";
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
  isAuthenticated: PropTypes.bool.isRequired,
  checkSessionProp: PropTypes.func.isRequired
};

function App({ isAuthenticated, checkSessionProp }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem("sendsay-session");
    if (session) {
      setLoading(true);
      checkSessionProp(session)
        .catch(() => {
          localStorage.removeItem("sendsay-session");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [checkSessionProp]);

  return (
    <div className="App">
      { loading ? (
        <div className="preloader" />
      ) : (
        <Switch>
          <Suspense fallback={ <div className="preloader" /> }>
            <Route path="/" exact>
              { isAuthenticated ? (
                <Redirect to="/console" />
              ) : (
                <Redirect to="/login" />
              ) }
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
  isAuthenticated: !!state.userData.session
});

App.propTypes = propTypes;

export default connect(mapStateToProps, { checkSessionProp: checkSession })(
  App
);
