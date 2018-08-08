import React, { Component } from 'react'

import './Navbar.css';

import { NavLink } from 'react-router-dom';

import Dice from '../../assets/img/dice2.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="navbar__list">
          <div className="navbar__brand">
            <img src={ Dice } alt="Dice" />
            <span>Destiny</span>
          </div>
          <div>
            <li className="navbar__list__item">
              <NavLink to="/">Início</NavLink>
            </li>
            <li className="navbar__list__item">
              <NavLink to="/store">Loja</NavLink>
            </li>
            <li className="navbar__list__item">
              <NavLink to="/login" className="navbar__list__item--auth login">Login</NavLink>
            </li>
            <li className="navbar__list__item">
              <NavLink to="/register" className="navbar__list__item--auth register">Registre-se</NavLink>
            </li>
            <li className="navbar__list__item trigram">
              <a href="" onClick={ () => void(0) }>&#9781;</a>
            </li>
          </div>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
