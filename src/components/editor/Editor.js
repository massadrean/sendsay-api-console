import React, { useRef } from "react";
import PropTypes from "prop-types";
import ReactResizeDetector from "react-resize-detector";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-json";
import "ace-builds/src-min-noconflict/theme-chrome";
import "ace-builds/webpack-resolver";
import "./Editor.css";

const propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  tabSize: PropTypes.number,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  isError: PropTypes.bool
};

const Editor = ({
  title,
  name,
  tabSize = 2,
  handleChange,
  value,
  readOnly = false,
  isError
}) => {
  const editorRef = useRef(null);

  const onResize = () => {
    editorRef.current.editor.resize();
    // editorRef.current.editor.renderer.updateFull()
  };

  return (
    <ReactResizeDetector onResize={ onResize } handleWidth>
      <div className="editor">
        { title && (
          <div
            className={ `editor__title ${isError ? "editor__title_error" : ""}` }
          >
            { title }
          </div>
        ) }
        <label
          className={ `editor__label ${isError ? "editor__label_error" : ""}` }
        >
          <AceEditor
            mode="json"
            theme="chrome"
            onChange={ handleChange }
            fontSize={ 14 }
            width="100%"
            height="100%"
            tabSize={ tabSize }
            name={ name }
            showGutter={ false }
            showPrintMargin={ false }
            highlightActiveLine={ false }
            readOnly={ readOnly }
            value={ value }
            ref={ editorRef }
          />
        </label>
      </div>
    </ReactResizeDetector>
  );
};

Editor.propTypes = propTypes;

export default Editor;
