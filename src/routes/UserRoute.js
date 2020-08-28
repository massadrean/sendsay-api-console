import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const propTypes = {
  component: PropTypes.oneOfType([PropTypes.object]).isRequired
};

const UserRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => !!state.userData.session);

  return (
    <Route
      { ...rest }
      render={ props =>
        isAuthenticated ? <Component { ...props } /> : <Redirect to="/login" />
      }
    />
  );
};

UserRoute.propTypes = propTypes;

export default UserRoute;
