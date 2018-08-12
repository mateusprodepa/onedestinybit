import React from 'react';

import './Noticia.css'

const noticia = props => (
    <div className="noticia" id={ `noticia-${props.index}` }>
      {/*<div className="noticia__image" style={ backgroundStyle }></div>*/}
      <img src={ props.img } alt="noticia" className="noticia__image"/>

      <div className="noticia__block">
        <span className="noticia__title">{ props.title }</span>
        <span className="noticia__text">{ props.text }</span>
      </div>
    </div>
  )

export default noticia;
