import React from 'react';
import PropTypes from 'prop-types';

import './Noticia.css'

const noticia = props => (
    <div className="noticia" id={ `noticia-${props.id + 1}` }>
      <img src={ props.img } alt="noticia" className="noticia__image"/>

      <div className="noticia__block">
        <span className="noticia__title">{ props.title }</span>
        <span className="noticia__text">{ props.text }</span>
      </div>
    </div>
  )

noticia.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default noticia;
