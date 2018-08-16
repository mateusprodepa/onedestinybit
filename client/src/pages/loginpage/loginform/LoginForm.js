import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './LoginForm.css';

// Configs
import { LOGIN_URL } from '../../../config/config';
import { setToken } from '../../../utils/utils';
import  * as ERRORS from '../../../config/errors';

// Third party modules
import axios from 'axios';

// Icons
import GooglePlus from '../../../assets/icons/google-plus.png';
import Facebook from '../../../assets/icons/facebook.png';
import Twitter from '../../../assets/icons/twitter.png';

// React Router dependencies
import { Link } from 'react-router-dom';

// Redux dependencies
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.googlePlus = React.createRef();
    this.facebook = React.createRef();
    this.twitter = React.createRef();
  }

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

    axios.post(LOGIN_URL, {
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
        setToken(res.data.token);
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
    window.addEventListener('keydown', (e) => this.callOnEnter(e))
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', (e) => this.callOnEnter(e))
  }

  // Dinamização das classes da div redes sociais
  animateSocialMedia = (e) => {
    const refs = {
      googlePlus: this.googlePlus,
      facebook: this.facebook,
      twitter: this.twitter
    }

    for(var x in refs) {
      const social = refs[x].current;
      if(social === e.target) {
        social.classList.add('expanded');
        setTimeout(() => social.classList.remove('expanded'), 2500);
      } else {
        social.classList.add('closed');
        setTimeout(() => social.classList.remove('closed'), 2500);
      }
    }
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

    return (
      <div className="loginForm">
        <div className="input-wrapper">
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
        <div className="input-wrapper">
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
              style={ errors.password ? style : null }
              className="mensagem-de-erro">{ errors.password ? errors.password : null }</span>
          </label>
        </div>
        <div className="social-media">
          <div
            ref={ this.googlePlus }
            onClick={ (e) => this.animateSocialMedia(e) }>
            <img alt="google-plus" src={ GooglePlus } aria-label="social-media"></img>
          </div>
          <div
            ref={ this.facebook }
            onClick={ (e) => this.animateSocialMedia(e) }>
            <img alt="facebook" src={ Facebook } aria-label="social-media"></img>
          </div>
          <div
            ref={ this.twitter }
            onClick={ (e) => this.animateSocialMedia(e) }>
            <img alt="twitter" src={ Twitter } aria-label="social-media"></img>
          </div>
        </div>
        <button
          id="loginInputBtn"
          onClick={ () => this.makeLoginRequest() }>Logar agora</button>
        <Link to="#">Esqueceu sua senha?</Link>
        <Link to="#">Não possui uma conta?</Link>
      </div>
    )
  }
}

/*
History, domínio do endereço do navegador
 Utilizado para redirecionar o usuário para
 A sua página de perfil ao executar o login
*/

LoginForm.propTypes = {
  history: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch);

export default connect(null, mapDispatchToProps)(LoginForm);
