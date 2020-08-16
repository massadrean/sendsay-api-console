import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";
import "./HistoryDropdown.css";

const propTypes = {
  style: PropTypes.oneOfType([PropTypes.object]),
  handleExecute: PropTypes.func.isRequired,
  handleCopy: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
};

const HistoryDropdown = forwardRef((props, ref) => {
  const { style, handleExecute, handleCopy, handleDelete, close } = props;

  return (
    <div className="history-dropdown" style={ style } ref={ ref }>
      <Button
        appearance="white button_text-left button_no-border-radius button_block"
        onClick={ () => {
          handleExecute();
          close();
        } }
      >
        Выполнить
      </Button>
      <Button
        appearance="white button_text-left button_no-border-radius button_block"
        onClick={ () => {
          handleCopy();
          close();
        } }
      >
        Скопировать
      </Button>
      <div className="history-dropdown__divider" />
      <Button
        appearance="white button_text-left button_no-border-radius button_hover-red button_block"
        onClick={ () => {
          handleDelete();
          close();
        } }
      >
        Удалить
      </Button>
    </div>
  );
});

HistoryDropdown.propTypes = propTypes;

export default HistoryDropdown;
