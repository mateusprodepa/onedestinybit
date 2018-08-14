import React from 'react';

import Dice from '../../assets/img/dice2.png';

import './Footer.css';

const footer = () => (
  <footer className="footer">
    <div className="footer__start">
      <img src={ Dice } alt="dice" />
      <span>Destiny</span>
    </div>
    <div className="footer__middle">
      <h2>Redes Sociais</h2>
      <div>
        <ul>
          <li><a href="#fb">Facebook</a></li>
          <li><a href="#fb">Twitter</a></li>
          <li><a href="#fb">Instagram</a></li>
          <li><a href="#fb">Youtube</a></li>
        </ul>
      </div>
    </div>
    <div className="footer__end">
      <h2>Links Úteis</h2>
      <div>
        <ul>
          <li><a href="#fb">Conheça a equipe</a></li>
          <li><a href="#fb">Trabalhe com a gente</a></li>
          <li><a href="#fb">Contato</a></li>
          <li><a href="#fb">Mande seu Feedback</a></li>
        </ul>
      </div>
    </div>
    <div className="copyright">
      <span>Copyright © 2018 One Destiny - Todos os direitos reservados</span>
      <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" rel="noopener noreferrer" target="_blank">CC 3.0 BY</a></div>
    </div>
  </footer>
)

export default footer;
