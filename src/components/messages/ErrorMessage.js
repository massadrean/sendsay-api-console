import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./ErrorMessage.css";

const propTypes = {
  title: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  iconComponent: PropTypes.elementType,
  iconSrc: PropTypes.string
};

const ErrorMessage = forwardRef((props, ref) => {
  const { title, errorText, iconComponent: Icon, iconSrc } = props;
  return (
    <div className="error-message" ref={ ref }>
      { Icon && (
        <div className="error-message__icon">
          <Icon />
        </div>
      ) }
      { iconSrc && (
        <div className="error-message__icon">
          <img src={ iconSrc } alt="" />
        </div>
      ) }
      <div className="error-message__text">
        <div className="error-message__title">{ title }</div>
        { errorText && <div className="error-message__descr">{ errorText }</div> }
      </div>
    </div>
  );
});

ErrorMessage.propTypes = propTypes;

export default ErrorMessage;
