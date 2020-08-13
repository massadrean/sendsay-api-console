import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../header/Header";
import logo from "../../images/LOGO.svg";
import ConsoleForm from "../forms/ConsoleForm";
import "./ConsolePage.css";

const propTypes = {
  userData: PropTypes.shape({
    login: PropTypes.string.isRequired,
    sublogin: PropTypes.string
  })
};

const ConsolePage = ({ userData }) => (
  <div className="console-page">
    <Header
      logo={ logo }
      title="API-консолька"
      userLogin={ userData.login }
      userSublogin={ userData.sublogin }
    />
    <ConsoleForm />
  </div>
);

const mapStateToProps = state => ({
  userData: state.userData
});

ConsolePage.propTypes = propTypes;

export default connect(mapStateToProps)(ConsolePage);
