import React from 'react';

const input = props => {
  return (
    <div className="input-wrapper">
      <label htmlFor="password">
        { props.label }
        <input
          name={ props.name }
          type={ props.type }
          placeholder={ props.placeholder }
          value={ props.value }
          className="inputField__input"
          style={ props.errors.border ? props.errors.border : null }
          onChange={ props.changed } />
        <span
          style={ props.errors.style ? props.errors.style : null }
          className="mensagem-de-erro">{ props.errors.error ? props.errors.error : null }</span>
      </label>
    </div>
  )
}

export default input;
