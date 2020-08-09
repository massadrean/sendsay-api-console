import React from "react";
import PropTypes from "prop-types";
import "./ErrorMessage.css";

const propTypes = {
  title: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  icon: PropTypes.string
};

const ErrorMessage = ({ title, errorText, icon }) => (
  <div className="error-message">
    { icon && (
      <div className="error-message__icon">
        <img src={ icon } alt="" />
      </div>
    ) }
    <div className="error-message__text">
      <div className="error-message__title">{ title }</div>
      { errorText && <div className="error-message__descr">{ errorText }</div> }
    </div>
  </div>
);

ErrorMessage.propTypes = propTypes;

export default ErrorMessage;
