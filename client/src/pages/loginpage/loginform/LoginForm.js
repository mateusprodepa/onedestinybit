import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './LoginForm.css';

import SocialMedia from '../../../components/social/Social';
import Input from '../../../components/form/input/Input';
import Button from '../../../components/form/button/Button';

// Configs
import { endpoints } from '../../../config/config';
import { auth } from '../../../utils/utils';
import  * as ERRORS from '../../../config/errors';

// Third party modules
import axios from 'axios';

// React Router dependencies
import { Link } from 'react-router-dom';

// Redux dependencies
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LoginForm extends Component {

  state = {
    username: '',
    password: '',
    errors: {}
  }

  /* Código necessário para atualizar os valores
   de cada input baseado no nome do input alvo e no nome da variável correspondente no estado */
  updateInputHandler(e) {
    this.setState({
      [ e.target.name ]: e.target.value
    })
  }


  /* Função responsável pela requisição para a endpoint de login da api */
  makeLoginRequest = () => {
    const { username, password } = this.state;

    this.setState({ errors: {} })

    axios.post(endpoints.LOGIN_URL, {
      username,
      password
    })
    .then(res => {

      if(!res.data) this.setState({ errors: ERRORS.LOGIN_TRY_ERROR });

      /*
      data: {
        token: your_token
      }
      */

      if(res.data.token) {
        auth.setToken(res.data.token);
        this.props.history.push("/user")
      }

      /*
      data: {
        errors: {
          username: ...,
          password: ...
        }
      }
      */

      if(res.data.errors) {
        const errors = res.data.errors;
        this.setState({ errors });
      }
    })
    .catch(err => this.setState({ errors: ERRORS.LOGIN_TRY_ERROR }));
  }


  // Executa a função makeLoginRequest quando a tecla ENTER é pressionada
  callOnEnter = (e) => {
    if(e.keyCode === 13) {
      this.makeLoginRequest();
    }
  }

  componentDidMount() {
    this.onEnter = e => this.callOnEnter(e);
    window.addEventListener('keydown', this.onEnter)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEnter)
  }

  render() {

    const { errors } = this.state;

    const borderStyle = {
      border: '1px solid #D54E43',
    }

    const style = {
      opacity: 1,
      display: "block"
    }

    const validations = {

      username: {
        error: errors.username ? errors.username : null,
        style: errors.username ? style : null,
        border: errors.username ? borderStyle : null
      },

      password: {
        error: errors.password ? errors.password : null,
        style: errors.password ? style : null,
        border: errors.password ? borderStyle : null
      }

    }

    return (
      <div className="loginForm">

        <Input
          label       = "Nome de Usuário"
          name        = "username"
          type        = "text"
          placeholder = "Insira seu nome de usuário"
          changed     = { e => this.updateInputHandler(e) }
          value       = { this.state.username }
          errors      = { validations.username } />

        <Input
          label       = "Sua Senha"
          name        = "password"
          type        = "password"
          placeholder = "Coloque a sua senha aqui"
          changed     = { e => this.updateInputHandler(e) }
          value       = { this.state.password }
          errors      = { validations.password } />

        <SocialMedia />

        <Button id="loginInputBtn" clicked={ this.makeLoginRequest }/>

        <Link to="#">Esqueceu sua senha?</Link>
        <Link to="#">Não possui uma conta?</Link>
      </div>
    )
  }
}

LoginForm.propTypes = {
  history: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch);

export default connect(null, mapDispatchToProps)(LoginForm);
