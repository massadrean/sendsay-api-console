import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Button.css";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  href: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  size: PropTypes.string,
  textAlign: PropTypes.string,
  startIcon: PropTypes.elementType,
  endIcon: PropTypes.elementType,
  iconHover: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool
};

const Button = forwardRef((props, ref) => {
  const {
    children,
    href,
    type = "button",
    color,
    variant,
    fullWidth,
    size,
    textAlign,
    startIcon: StartIcon,
    endIcon: EndIcon,
    iconHover,
    loading,
    disabled,
    ...rest
  } = props;

  const classes = classNames("button", {
    [`button_${color}`]: color,
    [`button_${variant}`]: variant,
    [`button_${size}`]: size,
    [`button_icon-hover-${iconHover}`]: iconHover,
    [`button_text-${textAlign}`]: textAlign,
    button_block: fullWidth,
    button_loading: loading,
    button_disabled: disabled
  });

  return (
    <>
      { href ? (
        <a href={ href } className={ classes } ref={ ref } { ...rest }>
          { StartIcon && (
            <span className="button__start-icon">
              <StartIcon />
            </span>
          ) }
          <span className="button__inner">{ children }</span>
          { EndIcon && (
            <span className="button__end-icon">
              <EndIcon />
            </span>
          ) }
        </a>
      ) : (
        <button
          type={ type }
          className={ classes }
          disabled={ disabled }
          ref={ ref }
          { ...rest }
        >
          { StartIcon && (
            <span className="button__start-icon">
              <StartIcon />
            </span>
          ) }
          <span className="button__inner">{ children }</span>
          { EndIcon && (
            <span className="button__end-icon">
              <EndIcon />
            </span>
          ) }
        </button>
      ) }
    </>
  );
});

Button.propTypes = propTypes;

export default Button;
