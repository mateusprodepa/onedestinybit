import React, { Component } from 'react';

import './LoginForm.css';

import GooglePlus from '../../../assets/icons/google-plus.png';
import Facebook from '../../../assets/icons/facebook.png';
import Twitter from '../../../assets/icons/twitter.png';

import { Link } from 'react-router-dom';

// Não vou usar o Redux pra desenvolver a lógica de autenticação
//
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
//
class LoginForm extends Component {

  state = {
    username: '',
    password: '',
    errors: {}
  }

  updateInputHandler(e) {
    this.setState({
      [ e.target.name ]: e.target.value
    })
  }

  render() {

    const { errors } = this.state;

    const borderStyle = {
      border: '1px solid #A73939'
    }

    const style = {
      opacity: 1,
      display: "block"
    }

    return (
      <div className="loginForm">
        <div className="inputField">
          <label htmlFor="username">
            Nome de Usuário
            <input
              name="username"
              type="text"
              placeholder="Insira seu nome de usuário"
              value={ this.state.username }
              className="inputField__input"
              style={ errors.username ? borderStyle : null }
              onChange={ (e) => this.updateInputHandler(e) } />
            <span
              style={ errors.username ? style : null }
              className="mensagem-de-erro">{ errors.username ? errors.username : null }</span>
          </label>
        </div>
        <div className="inputField">
          <label htmlFor="password">
            Sua senha
            <input
              name="password"
              type="password"
              placeholder="Coloque a sua senha aqui"
              value={ this.state.password }
              className="inputField__input"
              style={ errors.password ? borderStyle : null }
              onChange={ (e) => this.updateInputHandler(e) } />
            <span
              style={ errors.username ? style : null }
              className="mensagem-de-erro">{ errors.password ? errors.password : null }</span>
          </label>
        </div>
        <div className="social-media">
          <img alt="google-plus" src={ GooglePlus } aria-label="social-media"></img>
          <img alt="facebook" src={ Facebook } aria-label="social-media"></img>
          <img alt="twitter" src={ Twitter } aria-label="social-media"></img>
        </div>
        <button id="loginInputBtn">Logar agora</button>
        <Link to="#">Esqueceu sua senha?</Link>
        <Link to="#">Não possui uma conta?</Link>
      </div>
    )
  }
}

export default LoginForm;
