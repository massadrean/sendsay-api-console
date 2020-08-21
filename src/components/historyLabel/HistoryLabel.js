import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
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
import { ReactComponent as ThreeDotsIcon } from "../../images/three-dots.svg";
import "./HistoryLabel.css";

const propTypes = {
  title: PropTypes.string.isRequired,
  requestBody: PropTypes.string.isRequired,
  successful: PropTypes.bool.isRequired,
  dropdown: PropTypes.elementType.isRequired,
  scrollbarApi: PropTypes.oneOfType([PropTypes.object]),
  setConsoleInputValueAction: PropTypes.func.isRequired,
  submitRequestThunkAction: PropTypes.func.isRequired,
  removeRequestFromHistoryAction: PropTypes.func.isRequired
};

const HistoryLabel = ({
  title,
  requestBody,
  successful,
  dropdown: Dropdown,
  scrollbarApi,
  setConsoleInputValueAction,
  submitRequestThunkAction,
  removeRequestFromHistoryAction
}) => {
  const triggerDropdownRef = useRef(null);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);
  const [afterCopyText, setAfterCopyText] = useState("");
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);

  const fillConsoleInput = () => {
    setConsoleInputValueAction(requestBody);
  };

  const handleExecute = () => {
    fillConsoleInput();
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
  // clear timeout on unmount
  useEffect(
    () => () => {
      clearTimeout(timeoutRef.current);
    },
    [timeoutRef]
  );

  const handleDelete = () => {
    removeRequestFromHistoryAction(requestBody);
  };

  // use dropdown
  const [dropdownElement, dropdownProps] = useToggleLayer(
    ({ layerProps, isOpen, close }) => (
      <Dropdown
        isOpen={ isOpen }
        ref={ layerProps.ref }
        style={ {
          ...layerProps.style
        } }
      >
        <Button
          color="white-blue"
          textAlign="left"
          fullWidth
          onClick={ () => {
            handleExecute();
            close();
          } }
        >
          Выполнить
        </Button>
        <Button
          color="white-blue"
          textAlign="left"
          fullWidth
          onClick={ () => {
            handleCopy();
            close();
          } }
        >
          Скопировать
        </Button>
        <div className="history-label__dropdown-divider" />
        <Button
          color="white-red"
          textAlign="left"
          fullWidth
          onClick={ () => {
            handleDelete();
            close();
          } }
        >
          Удалить
        </Button>
      </Dropdown>
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
    dropdownProps.openFromRef(containerRef);
    dropdownProps.close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // close dropdown on scroll
  useEffect(() => {
    if (!scrollbarApi) return undefined;

    const onScroll = () => {
      if (!dropdownProps.isOpen) return;
      dropdownProps.close();
    };
    scrollbarApi.addListener(onScroll);

    return () => {
      scrollbarApi.removeListener(onScroll);
    };
  }, [scrollbarApi, dropdownProps]);

  const toggleDropdown = () => {
    const rectObj = containerRef.current.getBoundingClientRect();
    if (rectObj.left < 0) rectObj.left = 0;
    if (!dropdownProps.isOpen) {
      dropdownProps.open({
        clientRect: rectObj,
        target: triggerDropdownRef.current
      });
    } else {
      dropdownProps.close();
    }
  };

  return (
    <>
      { dropdownElement }
      <div
        ref={ containerRef }
        className={ classNames("history-label", {
          "history-label_successful": successful,
          "history-label_unsuccessful": !successful
        }) }
      >
        <button
          className="history-label__name-btn"
          type="button"
          onClick={ fillConsoleInput }
        >
          { title }
        </button>
        <div className="history-label__button">
          <Button
            color="grey-opacity"
            variant="text"
            onClick={ toggleDropdown }
            ref={ triggerDropdownRef }
          >
            <ThreeDotsIcon />
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
  removeRequestFromHistoryAction: name =>
    dispatch(removeRequestFromHistory(name)),
  submitRequestThunkAction: request => dispatch(submitRequest(request))
});

HistoryLabel.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(HistoryLabel);
