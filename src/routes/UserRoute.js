import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const propTypes = {
  component: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={ props =>
      isAuthenticated ? <Component { ...props } /> : <Redirect to="/login" />
    }
  />
);

UserRoute.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.userData.session
  };
}

export default connect(mapStateToProps)(UserRoute);
