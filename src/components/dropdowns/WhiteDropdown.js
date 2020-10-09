import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import "./WhiteDropdown.css";

const propTypes = {
  style: PropTypes.oneOfType([PropTypes.object]).isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

const WhiteDropdown = forwardRef((props, ref) => {
  const { isOpen, style, children } = props;

  return (
    <CSSTransition
      in={ isOpen }
      timeout={ 250 }
      classNames="white-dropdown_transition"
      unmountOnExit
    >
      <div className="white-dropdown" style={ style } ref={ ref }>
        { children }
      </div>
    </CSSTransition>
  );
});

WhiteDropdown.propTypes = propTypes;

export default WhiteDropdown;
