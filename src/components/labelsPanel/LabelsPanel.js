import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import WhiteDropdown from "../dropdowns/WhiteDropdown";
import HistoryLabel from "../historyLabel/HistoryLabel";
import useHorizontalScrollbar from "../../hooks/useHorizontalScrollbar";
import Button from "../button/Button";
import { ReactComponent as CloseIcon } from "../../images/close.svg";
import "./LabelsPanel.css";

const propTypes = {
  labels: PropTypes.arrayOf(PropTypes.object).isRequired,
  clearLabels: PropTypes.func.isRequired
};

const LabelsPanel = ({ labels, clearLabels }) => {
  const refsArray = [];

  useLayoutEffect(() => {
    let totalWidth = 15;
    let totalLength = refsArray.length;
    refsArray.forEach(
      node => {
        const nodeRect = node.getBoundingClientRect();
        totalWidth += nodeRect.width;
        totalLength -= 1;
        node.style.left = `${totalWidth - nodeRect.width}px`;
        node.style.zIndex = totalLength;
      },
      [labels]
    );
  });

  const scrollbarElement = useHorizontalScrollbar(
    scrollbarApi => (
      <div className="labels-panel_inner">
        <CSSTransition
          in={ !labels.length }
          timeout={ 500 }
          classNames="labels-panel__placeholder_transition"
          unmountOnExit
        >
          <h2 className="labels-panel__placeholder">Введите запрос:</h2>
        </CSSTransition>
        <TransitionGroup component={ null }>
          { labels.map(({ action, body, successful }) => (
            <CSSTransition
              key={ body }
              timeout={ 500 }
              classNames="labels-panel__label_transition"
            >
              <div
                className="labels-panel__label"
                ref={ el => {
                  refsArray.push(el);
                } }
              >
                <HistoryLabel
                  title={ action }
                  requestBody={ body }
                  successful={ successful }
                  dropdown={ WhiteDropdown }
                  scrollbarApi={ scrollbarApi }
                />
              </div>
            </CSSTransition>
          )) }
        </TransitionGroup>
      </div>
    ),
    {
      damping: 0.07,
      renderByPixels: true
    }
  );

  return (
    <div className="labels-panel">
      <div className="container labels-panel__container">
        <CSSTransition
          in={ !!labels.length }
          timeout={ 500 }
          classNames="labels-panel__clear-btn_transition"
          unmountOnExit
        >
          <div className="labels-panel__clear-btn">
            <Button
              color="blue"
              variant="text"
              iconHover="stroke"
              onClick={ clearLabels }
            >
              <CloseIcon />
            </Button>
          </div>
        </CSSTransition>
        { scrollbarElement }
      </div>
    </div>
  );
};

LabelsPanel.propTypes = propTypes;

export default LabelsPanel;
