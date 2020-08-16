import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearRequestHistory } from "../../redux/actions/consoleActions";
import Header from "../header/Header";
import logo from "../../images/LOGO.svg";
import LabelsPanel from "../labelsPanel/LabelsPanel";
import ConsoleForm from "../forms/ConsoleForm";
import "./ConsolePage.css";

const propTypes = {
  userData: PropTypes.shape({
    login: PropTypes.string.isRequired,
    sublogin: PropTypes.string
  }),
  requests: PropTypes.arrayOf(PropTypes.object).isRequired,
  clearRequestHistoryAction: PropTypes.func.isRequired
};

const ConsolePage = ({ userData, requests, clearRequestHistoryAction }) => (
  <div className="console-page">
    <Header
      logo={ logo }
      title="API-консолька"
      userLogin={ userData.login }
      userSublogin={ userData.sublogin }
    />
    { /* { !!requests.length && (
      <LabelsPanel labels={ requests } clearLabels={ clearRequestHistoryAction } />
    ) } */ }
    <LabelsPanel labels={ requests } clearLabels={ clearRequestHistoryAction } />
    <ConsoleForm />
  </div>
);

const mapStateToProps = state => ({
  userData: state.userData,
  requests: state.console.requests
});

const mapDispatchToProps = dispatch => ({
  clearRequestHistoryAction: () => dispatch(clearRequestHistory())
});

ConsolePage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ConsolePage);
