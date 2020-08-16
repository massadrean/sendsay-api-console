import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./InputLabelGroup.css";

const propTypes = {
  leftLabelText: PropTypes.string,
  rightLabelText: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isError: PropTypes.bool
};

const InputLabelGroup = ({
  leftLabelText,
  rightLabelText,
  type = "text",
  name,
  value,
  handleChange,
  isError
}) => (
  <label className="input-label-group">
    { leftLabelText || rightLabelText ? (
      <div className="input-label-group__title-row">
        { leftLabelText && (
          <div
            className={ classNames(
              "input-label-group__title-col",
              "input-label-group__title-left",
              {
                "input-label-group__left-text_error": isError
              }
            ) }
          >
            { leftLabelText }
          </div>
        ) }
        { rightLabelText && (
          <div className="input-label-group__title-col input-label-group__title-right">
            { rightLabelText }
          </div>
        ) }
      </div>
    ) : null }
    <input
      type={ type }
      className={ classNames("form-control", {
        "form-control_error": isError
      }) }
      name={ name }
      value={ value }
      onChange={ handleChange }
    />
  </label>
);

InputLabelGroup.propTypes = propTypes;

export default InputLabelGroup;
