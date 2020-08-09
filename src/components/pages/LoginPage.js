import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { requestSession } from "../../redux/actions/authorizationActions";
import logo from "../../images/LOGO.svg";
import LoginForm from "../forms/LoginForm";
import Link from "../link/Link";
import "./LoginPage.css";

const propTypes = {
  requestSessionProp: PropTypes.func.isRequired
};

const LoginPage = ({ requestSessionProp }) => {
  const handleFormSubmit = formData => requestSessionProp(formData);

  return (
    <div className="login-page">
      <div className="container login-page__container">
        <div className="login-page__inner">
          <div className="login-page__logo">
            <img src={ logo } alt="Logo" />
          </div>
          <div className="login-page__form">
            <LoginForm title="API-консолька" handleSubmit={ handleFormSubmit } />
          </div>
          <div className="login-page__bottom">
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
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = propTypes;

export default connect(null, { requestSessionProp: requestSession })(LoginPage);
