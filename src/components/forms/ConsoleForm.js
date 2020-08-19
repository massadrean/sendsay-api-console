import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Split from "react-split";
import {
  submitRequest,
  setConsoleRatio,
  setConsoleInputValue
} from "../../redux/actions/consoleActions";
import Editor from "../editor/Editor";
import Button from "../button/Button";
import { ReactComponent as FourLinesIcon } from "../../images/four-lines.svg";
import "./ConsoleForm.css";

const propTypes = {
  isLoading: PropTypes.bool,
  submitRequestThunkAction: PropTypes.func.isRequired,
  serverResponse: PropTypes.string,
  isServerError: PropTypes.bool,
  consoleRatio: PropTypes.arrayOf(PropTypes.number),
  setConsoleRatioAction: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
  setConsoleInputValueAction: PropTypes.func.isRequired
};

const ConsoleForm = ({
  isLoading,
  submitRequestThunkAction,
  serverResponse,
  isServerError,
  consoleRatio,
  setConsoleRatioAction,
  inputValue,
  setConsoleInputValueAction
}) => {
  const [inputError, setInputError] = useState(false);
  const editorTabSize = 2;

  const handleChange = val => {
    setConsoleInputValueAction(val);
  };

  const handleResize = sizes => {
    setConsoleRatioAction(sizes);
  };

  const formatJson = json => {
    let obj;
    try {
      obj = JSON.parse(json);
    } catch (err) {
      return "";
    }
    return JSON.stringify(obj, null, editorTabSize);
  };

  const formatInputValue = () => {
    const formatted = formatJson(inputValue);
    if (formatted) {
      setConsoleInputValueAction(formatted);
      setInputError(false);
    } else {
      setInputError(true);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!isLoading) {
      const formattedInputValue = formatJson(inputValue);
      if (formattedInputValue) {
        setInputError(false);
        submitRequestThunkAction(formattedInputValue);
      } else {
        setInputError(true);
      }
    }
  };

  return (
    <form className="console-form" onSubmit={ handleSubmit }>
      <div className="container console-form__editor-container">
        <Split
          className="console-form__split"
          sizes={ consoleRatio }
          gutterAlign="center"
          snapOffset={ 0 }
          gutterSize={ 10 }
          direction="horizontal"
          cursor="col-resize"
          onDragEnd={ handleResize }
        >
          <Editor
            title="Запрос:"
            name="request-input"
            tabSize={ editorTabSize }
            handleChange={ handleChange }
            value={ inputValue }
            isError={ inputError }
          />
          <Editor
            title="Ответ:"
            name="request-output"
            tabSize={ editorTabSize }
            isError={ isServerError }
            value={ serverResponse }
            readOnly
          />
        </Split>
      </div>
      <div className="console-form__footer">
        <div className="container console-form__footer-container">
          <Button color="blue" type="submit" loading={ isLoading }>
            Отправить
          </Button>
          <div className="console-form__footer-center">
            <Button
              href="https://github.com/massadrean/"
              color="grey"
              variant="text"
              data-hover="github.com/massadrean"
              rel="noreferrer"
              target="_blank"
            >
              github.com/massadrean
            </Button>
          </div>
          <Button
            color="blue"
            variant="text"
            startIcon={ FourLinesIcon }
            iconHover="stroke"
            onClick={ formatInputValue }
          >
            Форматировать
          </Button>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  isLoading: state.console.isFetching,
  serverResponse: state.console.outputValue,
  isServerError: state.console.isServerError,
  consoleRatio: state.console.ratio,
  inputValue: state.console.inputValue
});

const mapDispatchToProps = dispatch => ({
  submitRequestThunkAction: request => dispatch(submitRequest(request)),
  setConsoleRatioAction: ratio => dispatch(setConsoleRatio(ratio)),
  setConsoleInputValueAction: value => dispatch(setConsoleInputValue(value))
});

ConsoleForm.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ConsoleForm);
