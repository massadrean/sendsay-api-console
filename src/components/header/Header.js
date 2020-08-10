import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutAction } from "../../redux/actions/authorizationActions";
import useFullscreent from "../../hooks/useFullscreen";
import Button from "../button/Button";
import { ReactComponent as Logout } from "../../images/logout.svg";
import { ReactComponent as Fullscreen } from "../../images/fullscreen.svg";
import { ReactComponent as ExitFullscreen } from "../../images/exit-fullscreen.svg";
import ErrorMessage from "../messages/ErrorMessage";
import "./Header.css";

const propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  userLogin: PropTypes.string.isRequired,
  userSublogin: PropTypes.string,
  logout: PropTypes.func.isRequired
};

const Header = ({ logo, title, userLogin, userSublogin, logout }) => {
  const [toggleFullscreen, isFullscreen, fullscreenError] = useFullscreent();

  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__logo">
          <img src={ logo } alt="" />
        </div>
        { title && <h1 className="header__title">{ title }</h1> }
        <div className="header__user-info">
          <div className="header__user-login">{ userLogin }</div>
          { userSublogin && (
            <div className="header__user-sublogin">{ userSublogin }</div>
          ) }
        </div>
        <div className="header__logout">
          <Button
            appearance="link button_link-blue button_svg-stroke-hover-blue"
            onClick={ () => {
              logout(logoutAction());
            } }
          >
            Выйти
            <span className="header__logout-icon">
              <Logout />
            </span>
          </Button>
        </div>
        <div className="header__toggle-fullscreen">
          <Button
            onClick={ toggleFullscreen }
            appearance="link button_link-blue button_svg-stroke-hover-blue"
          >
            { isFullscreen ? <ExitFullscreen /> : <Fullscreen /> }
          </Button>
        </div>
      </div>
      { fullscreenError && (
        <div className="fixed-error">
          <ErrorMessage
            title="Ошибка при входе в полноэкранный режим"
            errorText={ fullscreenError }
          />
        </div>
      ) }
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: action => {
    dispatch(action);
  }
});

Header.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(Header);
