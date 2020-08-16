import React from "react";
import PropTypes from "prop-types";
import HistoryDropdown from "../historyDropdown/HistoryDropdown";
import HistoryLabel from "../historyLabel/HistoryLabel";
import useHorizontalScrollbar from "../../hooks/useHorizontalScroll";
import Button from "../button/Button";
import { ReactComponent as CloseSvg } from "../../images/close.svg";
import "./LabelsPanel.css";

const propTypes = {
  labels: PropTypes.arrayOf(PropTypes.object).isRequired,
  clearLabels: PropTypes.func.isRequired
};

const LabelsPanel = ({ labels, clearLabels }) => {
  const scrollbarElement = useHorizontalScrollbar(
    scrollbarApi => (
      <div className="labels-panel_inner">
        { labels.map(({ action, body, successful }) => (
          <div className="labels-panel__label" key={ body }>
            <HistoryLabel
              title={ action }
              requestBody={ body }
              successful={ successful }
              dropdown={ HistoryDropdown }
              scrollbarApi={ scrollbarApi }
            />
          </div>
        )) }
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
        <div className="labels-panel__clear-btn">
          <Button
            appearance="link button_link-blue button_svg-stroke-hover-blue"
            onClick={ clearLabels }
          >
            <CloseSvg />
          </Button>
        </div>
        { scrollbarElement }
      </div>
    </div>
  );
};

LabelsPanel.propTypes = propTypes;

export default LabelsPanel;
