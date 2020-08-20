import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ReactResizeDetector from "react-resize-detector";
import InputLabelGroup from "./InputLabelGroup";
import Button from "../button/Button";
import ErrorMessage from "../messages/ErrorMessage";
import { ReactComponent as MehIcon } from "../../images/meh.svg";
import "./form.css";
import "./LoginForm.css";

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string
};

const LoginForm = ({ handleSubmit, title }) => {
  const messageRef = useRef(null);
  const [data, setData] = useState({
    login: "",
    sublogin: "",
    password: ""
  });
  const [isLoading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [serverErrors, setServerErrors] = useState({});
  const [messageHeight, setMessageHeight] = useState(0);

  useEffect(() => {
    LoginForm.isMounted = true;
    return () => {
      LoginForm.isMounted = false;
    };
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setData(state => {
      const newState = { ...state };
      newState[name] = value;

      if (LoginForm.wasErrors) {
        const errors = validate(newState);
        setValidationErrors(errors);
      }

      return newState;
    });
  };

  const validate = formData => {
    const errors = {};
    // latin char, numbers and "_@." only; min length: 4
    const loginRegexp = /^[A-Za-z0-9_@.]{4,}$/;
    // latin char, numbers and "_" only
    const subloginRegexp = /^[A-Za-z0-9_]{0,}$/;
    // latin char, numbers and special symbols only; must contain at least 1 uppercase letter, 1 lowercase letter and 1 number; min length: 8
    const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z_@.?!#$%^&*()\\\-=+/|;:'",~><}{\][ ]{8,}$/;

    if (!loginRegexp.test(formData.login)) errors.login = true;
    if (!subloginRegexp.test(formData.sublogin)) errors.sublogin = true;
    if (!passwordRegexp.test(formData.password)) errors.password = true;

    return errors;
  };

  const onSubmit = e => {
    e.preventDefault();

    const errors = validate(data);
    const isErrors = !!Object.keys(errors).length;

    LoginForm.wasErrors = isErrors;
    setValidationErrors(errors);

    if (!isErrors && !isLoading) {
      setLoading(true);
      handleSubmit(data)
        .catch(err => {
          setServerErrors(err);
          setLoading(false);
        })
        .finally(() => {
          if (LoginForm.isMounted) setLoading(false); // prevent "Can't perform a React state update on an unmounted component" error if redirected after submit
        });
    }
  };

  useEffect(() => {
    if (messageRef.current) setMessageHeight(messageRef.current.clientHeight);
  }, [serverErrors]);

  const onResize = () => {
    setMessageHeight(messageRef.current.clientHeight);
  };

  return (
    <form className="login-form" onSubmit={ onSubmit }>
      { title && <h1 className="login-form__title">{ title }</h1> }
      { !!Object.keys(serverErrors).length && (
        <ReactResizeDetector onResize={ onResize } handleWidth>
          <div className="login-form__alert" style={ { height: messageHeight } }>
            <ErrorMessage
              title="Вход не вышел"
              errorText={ JSON.stringify(serverErrors) }
              iconComponent={ MehIcon }
              ref={ messageRef }
            />
          </div>
        </ReactResizeDetector>
      ) }
      <div className="login-form__row">
        <InputLabelGroup
          leftLabelText="Логин"
          name="login"
          handleChange={ handleChange }
          value={ data.login }
          isError={ validationErrors.login }
        />
      </div>
      <div className="login-form__row">
        <InputLabelGroup
          leftLabelText="Сублогин"
          rightLabelText="Опционально"
          name="sublogin"
          handleChange={ handleChange }
          value={ data.sublogin }
          isError={ validationErrors.sublogin }
        />
      </div>
      <div className="login-form__row">
        <InputLabelGroup
          leftLabelText="Пароль"
          type="password"
          name="password"
          handleChange={ handleChange }
          value={ data.password }
          isError={ validationErrors.password }
        />
      </div>
      <div className="login-form__submit">
        <Button
          color="blue"
          type="submit"
          disabled={ !!Object.keys(validationErrors).length }
          loading={ isLoading }
        >
          Войти
        </Button>
      </div>
    </form>
  );
};

LoginForm.propTypes = propTypes;

export default LoginForm;
