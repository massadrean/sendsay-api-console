import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./Button.css";

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  type: PropTypes.string,
  appearance: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool
};

const Button = forwardRef((props, ref) => {
  const {
    children,
    type = "button",
    appearance,
    loading,
    disabled,
    ...rest
  } = props;

  return (
    <button
      type={ type }
      className={ `button button_${appearance} ${
        loading ? "button_loading" : ""
      } ${disabled ? "button_disabled" : ""}` }
      disabled={ disabled }
      ref={ ref }
      { ...rest }
    >
      <span className="button__inner">{ children }</span>
    </button>
  );
});

Button.propTypes = propTypes;

export default Button;
