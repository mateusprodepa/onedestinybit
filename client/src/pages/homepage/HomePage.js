import React, { Component } from 'react';

import './HomePage.css';

import Logo from '../../assets/img/w35.png';

// Componentes
import Main from '../../components/main/Main';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

class HomePage extends Component {

  render() {
    return (
      <div>
        <div className="banner">
          <div className="bg"></div>
          <Navbar />
          <div id="b">
            <img
              src={ Logo }
              alt="Logo"
              className="banner__logo" />
          </div>
        </div>
        <div className="block">
          <div className="block__text">
            <h2>1Destiny</h2>
            <h3> é uma rede social com o intuito de reunir jogadores de RPG de Mesa, com uma plataforma gratuita os jogadores terão a possibilidade de se reunir com vários outros, compartilhar seus gostos, seus cenários, seus mundos com todas as outras pessoas.</h3>
          </div>
        </div>
        <Main>
        </Main>
        <Footer />
      </div>
    )
  }
}

export default HomePage;
