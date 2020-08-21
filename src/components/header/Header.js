import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userLogout } from "../../redux/actions/authorizationActions";
import useFullscreent from "../../hooks/useFullscreen";
import Button from "../button/Button";
import { ReactComponent as LogoutIcon } from "../../images/logout.svg";
import { ReactComponent as FullscreenIcon } from "../../images/fullscreen.svg";
import { ReactComponent as ExitFullscreenIcon } from "../../images/exit-fullscreen.svg";
import ErrorMessage from "../messages/ErrorMessage";
import "./Header.css";

const propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  userLogin: PropTypes.string.isRequired,
  userSublogin: PropTypes.string,
  logoutAction: PropTypes.func.isRequired
};

const Header = ({ logo, title, userLogin, userSublogin, logoutAction }) => {
  const {
    openFullscreen,
    closeFullscreen,
    isFullscreen,
    fullscreenError
  } = useFullscreent();

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      openFullscreen(document.documentElement);
    } else {
      closeFullscreen();
    }
  };

  const handleLogout = () => {
    if (isFullscreen) {
      closeFullscreen();
    }
    logoutAction();
  };

  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__logo">
          <img src={ logo } alt="" />
        </div>
        { title && <h1 className="header__title">{ title }</h1> }
        <div className="header__user-info">
          <div className="header__user-info-col header__user-login">
            { userLogin }
          </div>
          { userSublogin && (
            <div className="header__user-info-col header__user-sublogin">
              { userSublogin }
            </div>
          ) }
        </div>
        <div className="header__logout">
          <Button
            color="blue"
            variant="text"
            endIcon={ LogoutIcon }
            iconHover="stroke"
            onClick={ handleLogout }
          >
            Выйти
          </Button>
        </div>
        <div className="header__toggle-fullscreen">
          <Button
            color="blue"
            variant="text"
            iconHover="stroke"
            onClick={ toggleFullscreen }
          >
            { isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon /> }
          </Button>
        </div>
      </div>
      { fullscreenError && (
        <div className="fixed-error">
          <ErrorMessage title="Ошибка!" errorText={ fullscreenError } />
        </div>
      ) }
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  logoutAction: () => {
    dispatch(userLogout());
  }
});

Header.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(Header);
