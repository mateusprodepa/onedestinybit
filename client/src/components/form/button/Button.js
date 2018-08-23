import React from 'react';

const button = props => {
  return (
    <button
      id={ props.id }
      onClick={ props.clicked }>Logar agora</button>
  )
}

export default button;
