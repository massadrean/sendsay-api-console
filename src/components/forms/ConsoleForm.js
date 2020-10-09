import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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

const ConsoleForm = () => {
  const isLoading = useSelector(state => state.console.isFetching);
  const serverResponse = useSelector(state => state.console.outputValue);
  const isServerError = useSelector(state => state.console.isServerError);
  const consoleRatio = useSelector(state => state.console.ratio);
  const inputValue = useSelector(state => state.console.inputValue);
  const dispatch = useDispatch();
  const [inputError, setInputError] = useState(false);
  const editorTabSize = 2;

  const handleChange = val => {
    dispatch(setConsoleInputValue(val));
  };

  const handleResize = sizes => {
    dispatch(setConsoleRatio(sizes));
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
      dispatch(setConsoleInputValue(formatted));
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
        dispatch(submitRequest(formattedInputValue));
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

export default ConsoleForm;
