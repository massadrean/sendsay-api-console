import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearRequestHistory } from "../../redux/actions/consoleActions";
import Header from "../header/Header";
import logo from "../../images/LOGO.svg";
import LabelsPanel from "../labelsPanel/LabelsPanel";
import ConsoleForm from "../forms/ConsoleForm";
import "./ConsolePage.css";

const ConsolePage = () => {
  const userData = useSelector(state => state.userData);
  const requests = useSelector(state => state.console.requests);
  const dispatch = useDispatch();

  return (
    <div className="console-page">
      <Header
        logo={ logo }
        title="API-консолька"
        userLogin={ userData.login }
        userSublogin={ userData.sublogin }
      />
      <LabelsPanel
        labels={ requests }
        clearLabels={ () => {
          dispatch(clearRequestHistory());
        } }
      />
      <ConsoleForm />
    </div>
  );
};

export default ConsolePage;
