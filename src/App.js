import React, { Suspense, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkSession, userLogout } from "./redux/actions/authorizationActions";
import GuestRoute from "./routes/GuestRoute";
import UserRoute from "./routes/UserRoute";
import "./App.css";

const LoginPage = React.lazy(() =>
  import(/* webpackChunkName: "LoginPage" */ "./components/pages/LoginPage")
);
const ConsolePage = React.lazy(() =>
  import(/* webpackChunkName: "ConsolePage" */ "./components/pages/ConsolePage")
);

function App() {
  const session = useSelector(state => state.userData.session);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session) {
      setLoading(true);
      dispatch(checkSession(session))
        .catch(() => {
          dispatch(userLogout()); // clear storage if the session has expired
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [dispatch, session]);

  return (
    <div className="App">
      { loading ? (
        <div className="preloader" />
      ) : (
        <Suspense fallback={ <div className="preloader" /> }>
          <Switch>
            <GuestRoute path="/login" exact component={ LoginPage } />
            <UserRoute path="/console" exact component={ ConsolePage } />
            <Route path="*">
              { session ? <Redirect to="/console" /> : <Redirect to="/login" /> }
            </Route>
          </Switch>
        </Suspense>
      ) }
    </div>
  );
}

export default App;
