import React, { Component } from 'react';

import './LoginPage.css';

import Dice from '../../assets/img/dice2.png';

import LoginForm from './loginform/LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="bgBlur"></div>
        <div className="loginContent">
          <div className="login__brand">
            <img src={ Dice } alt="Dice" />
            <span>Destiny</span>
          </div>
          <h2 className="emphasis">Quero logar na minha conta</h2>
          <div className="separator"></div>
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default LoginPage;
