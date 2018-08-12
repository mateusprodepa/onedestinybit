import React from 'react';

import './Main.css';

const main = props => (
  <main className="main">
    {props.children}
    <div className="main__bg"></div>
  </main>
)

export default main;
