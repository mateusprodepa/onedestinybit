import React from 'react';

const input = props => {
  return (
    <div className="input-wrapper">
      <label htmlFor="password">
        { props.label }
        Sua senha
        <input
          name={ props.name }
          type={ props.type }
          placeholder={ props.placeholder }
          value={ props.value }
          className="inputField__input"
          style={ props.border }
          onChange={ props.changed } />
        <span
          style={ props.style }
          className="mensagem-de-erro">{ props.error }</span>
      </label>
    </div>
  )
}

export default input;
