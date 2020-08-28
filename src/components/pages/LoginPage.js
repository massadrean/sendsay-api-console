import React from "react";
import { useDispatch } from "react-redux";
import { requestSession } from "../../redux/actions/authorizationActions";
import logo from "../../images/LOGO.svg";
import LoginForm from "../forms/LoginForm";
import Button from "../button/Button";
import "./LoginPage.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleFormSubmit = formData => dispatch(requestSession(formData));

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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
