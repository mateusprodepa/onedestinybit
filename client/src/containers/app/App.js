import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from '../routes/routes';

import '../../css/App.css';
import '../../css/Fonts.css';

const store = createStore(() => {});

class App extends Component {

  componentDidMount() {
    window.logout = function() {
      localStorage.removeItem('ONEDESTINY_TOKEN_KEY');
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
