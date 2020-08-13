import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Split from "react-split";
import { submitRequest } from "../../redux/actions/requestHistoryActions";
import { changeRatio } from "../../redux/actions/consoleActions";
import Editor from "../editor/Editor";
import Button from "../button/Button";
import Link from "../link/Link";
import { ReactComponent as FourLines } from "../../images/four-lines.svg";
import "./ConsoleForm.css";

const propTypes = {
  isLoading: PropTypes.bool,
  submitRequestThunkAction: PropTypes.func.isRequired,
  serverResponse: PropTypes.oneOfType([PropTypes.object]),
  isServerError: PropTypes.bool,
  consoleRatio: PropTypes.arrayOf(PropTypes.number),
  setConsoleRatio: PropTypes.func.isRequired
};

const ConsoleRequestForm = ({
  isLoading,
  submitRequestThunkAction,
  serverResponse,
  isServerError,
  consoleRatio,
  setConsoleRatio
}) => {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);
  const editorTabSize = 2;
  let stringifiedServerResponse = "";
  try {
    stringifiedServerResponse = JSON.stringify(serverResponse, null, 2);
  } catch (err) {
    stringifiedServerResponse = err.toString();
    isServerError = true;
  }

  const handleChange = val => {
    setInputValue(val);
  };

  const handleResize = sizes => {
    setConsoleRatio(sizes);
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
      setInputValue(formatted);
      setInputError(false);
    } else {
      setInputError(true);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formatJson(inputValue)) {
      setInputError(false);
      submitRequestThunkAction(JSON.parse(inputValue));
    } else {
      setInputError(true);
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
            handleResize={ handleResize }
            tabSize={ editorTabSize }
            handleChange={ handleChange }
            value={ inputValue }
            isError={ inputError }
          />
          <Editor
            title="Ответ:"
            name="request-output"
            handleResize={ handleResize }
            tabSize={ editorTabSize }
            isError={ isServerError }
            value={ stringifiedServerResponse }
            readOnly
          />
        </Split>
      </div>
      <div className="console-form__footer">
        <div className="container console-form__footer-container">
          <Button appearance="blue" type="submit" loading={ isLoading }>
            Отправить
          </Button>
          <div className="console-form__footer-center">
            <Link
              href="https://github.com/massadrean/"
              appearance="grey"
              data-hover="github.com/massadrean"
              rel="noreferrer"
              target="_blank"
            >
              github.com/massadrean
            </Link>
          </div>
          <Button
            appearance="link button_link-blue button_svg-stroke-hover-blue"
            onClick={ formatInputValue }
          >
            <span className="button__left-icon">
              <FourLines />
            </span>
            Форматировать
          </Button>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  isLoading: state.requestHistory.isFetching,
  serverResponse: state.requestHistory.response,
  isServerError: state.requestHistory.error,
  consoleRatio: state.console.ratio
});

const mapDispatchToProps = dispatch => ({
  submitRequestThunkAction: request => dispatch(submitRequest(request)),
  setConsoleRatio: ratio => {
    dispatch(changeRatio(ratio));
  }
});

ConsoleRequestForm.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ConsoleRequestForm);
