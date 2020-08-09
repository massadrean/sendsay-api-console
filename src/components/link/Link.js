import React from "react";
import PropTypes from "prop-types";
import "./Link.css";

const propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  appearance: PropTypes.string.isRequired
};

const Link = ({ children, href, appearance, ...rest }) => (
  <a href={ href } className={ `link link_${appearance}` } { ...rest }>
    <span className="link__inner">{ children }</span>
  </a>
);

Link.propTypes = propTypes;

export default Link;
