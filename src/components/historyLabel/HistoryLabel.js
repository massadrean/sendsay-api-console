import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useToggleLayer } from "react-laag";
import ResizeObserver from "resize-observer-polyfill";
import * as clipboard from "clipboard-polyfill/text";
import { CSSTransition } from "react-transition-group";
import {
  setConsoleInputValue,
  submitRequest,
  removeRequestFromHistory
} from "../../redux/actions/consoleActions";
import Button from "../button/Button";
import { ReactComponent as ThreeDots } from "../../images/three-dots.svg";
import "./HistoryLabel.css";

const propTypes = {
  title: PropTypes.string.isRequired,
  requestBody: PropTypes.string.isRequired,
  successful: PropTypes.bool.isRequired,
  dropdown: PropTypes.elementType.isRequired,
  scrollbarApi: PropTypes.oneOfType([PropTypes.object]),
  setConsoleInputValueAction: PropTypes.func.isRequired,
  submitRequestThunkAction: PropTypes.func.isRequired,
  removeRequestAction: PropTypes.func.isRequired
};

const HistoryLabel = ({
  title,
  requestBody,
  successful,
  dropdown: Dropdown,
  scrollbarApi,
  setConsoleInputValueAction,
  submitRequestThunkAction,
  removeRequestAction
}) => {
  const triggerDropdownRef = useRef(null);
  const containerRef = useRef(null);
  const [afterCopyText, setAfterCopyText] = useState("");
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  const timeoutRef = useRef(null);

  const fillEditor = () => {
    setConsoleInputValueAction(requestBody);
  };

  const handleExecute = () => {
    fillEditor();
    submitRequestThunkAction(requestBody);
  };

  const handleCopy = async() => {
    try {
      await clipboard.writeText(requestBody);
      setAfterCopyText("Скопировано");
    } catch (e) {
      setAfterCopyText("Ошибка при копировании");
    } finally {
      setShowCopyTooltip(true);
      timeoutRef.current = setTimeout(() => {
        setShowCopyTooltip(false);
      }, 2000);
    }
  };

  const handleDelete = () => {
    removeRequestAction(title);
  };

  useEffect(
    () => () => {
      clearTimeout(timeoutRef.current);
    },
    [timeoutRef]
  );

  const [dropdownElement, toggleLayerProps] = useToggleLayer(
    ({ layerProps, isOpen, close }) => (
      <CSSTransition
        in={ isOpen }
        timeout={ 250 }
        classNames="history-dropdown_transition"
        unmountOnExit
      >
        <Dropdown
          ref={ layerProps.ref }
          style={ {
            ...layerProps.style
          } }
          handleExecute={ handleExecute }
          handleCopy={ handleCopy }
          handleDelete={ handleDelete }
          close={ () => {
            close();
          } }
        />
      </CSSTransition>
    ),
    {
      placement: {
        anchor: "BOTTOM_RIGHT",
        possibleAnchors: [
          "TOP_CENTER",
          "TOP_LEFT",
          "TOP_RIGHT",
          "BOTTOM_LEFT",
          "BOTTOM_CENTER",
          "BOTTOM_RIGHT"
        ],
        autoAdjust: true,
        snapToAnchor: true,
        preferX: "LEFT",
        triggerOffset: 0,
        SCROLLOFFSET: 15
      },
      closeOnOutsideClick: true,
      ResizeObserver
    }
  );

  useEffect(() => {
    // we need this hack due to react-laag's first render transition bug
    toggleLayerProps.openFromRef(containerRef);
    toggleLayerProps.close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!scrollbarApi) return undefined;

    const onScroll = () => {
      if (!toggleLayerProps.isOpen) return;
      toggleLayerProps.close();
    };
    scrollbarApi.addListener(onScroll);

    return () => {
      scrollbarApi.removeListener(onScroll);
    };
  }, [scrollbarApi, toggleLayerProps]);

  const toggleDropdown = () => {
    let {
      top,
      right,
      bottom,
      left,
      width,
      height,
      x,
      y
    } = containerRef.current.getBoundingClientRect();

    if (left < 0) left = 0;

    if (!toggleLayerProps.isOpen) {
      toggleLayerProps.open({
        clientRect: {
          top,
          right,
          bottom,
          left,
          width,
          height,
          x,
          y
        },
        target: triggerDropdownRef.current
      });
    } else {
      toggleLayerProps.close();
    }
  };

  return (
    <>
      { dropdownElement }
      <div
        ref={ containerRef }
        className={ `history-label ${
          successful ? "history-label_successful" : "history-label_unsuccessful"
        }` }
      >
        <div className="history-label__name">
          <Button
            appearance="link button_link-blue button_no-outline"
            onClick={ fillEditor }
          >
            { title }
          </Button>
        </div>
        <div className="history-label__button">
          <Button
            appearance="link button_link-blue button_no-outline button_link-opacity"
            onClick={ toggleDropdown }
            ref={ triggerDropdownRef }
          >
            <ThreeDots />
          </Button>
        </div>
        <CSSTransition
          in={ showCopyTooltip }
          timeout={ 250 }
          classNames="history-label__tooltip_transition"
          unmountOnExit
        >
          <div className="history-label__tooltip">{ afterCopyText }</div>
        </CSSTransition>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  setConsoleInputValueAction: value => dispatch(setConsoleInputValue(value)),
  removeRequestAction: name => dispatch(removeRequestFromHistory(name)),
  submitRequestThunkAction: request => dispatch(submitRequest(request))
});

HistoryLabel.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(HistoryLabel);
