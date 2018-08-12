import React, { Component } from 'react';

import * as CONFIG from '../../config/config';

import axios from 'axios';

import Noticia from './noticia/Noticia';

import './Noticias.css';

class Noticias extends Component {

  constructor(props) {
    super(props);
    this.noticias = React.createRef();
  }

  state = {
    noticias: [],
    isLoading: true,
  }

  fetchNews() {
    this.setState({ isLoading: true });
    axios.get(CONFIG.NEWS_URL)
    .then(res => {
      console.log(res);
      if(res.data) {
        this.setState({
          noticias: [ ...res.data ],
          isLoading: false
        });
      } else {
        this.setState({ isLoading: false });
      }
    })
    .catch(err => {
      this.setState({ isLoading: false });
    });
  }

  componentDidMount() {
    this.fetchNews();
  }

  render() {

    const { noticias, isLoading } = this.state;

    const content = isLoading ?
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> :
    noticias.map((noticia, index) =>
      <Noticia
        id={ index }
        key={ noticia.Codigo }
        title={ noticia.Titulo}
        img={ noticia.Imagem }
        text={ noticia.Descricao } />)

    return (
      <div>
        <h2 className="title">Updates</h2>
        <div className="noticias" ref={ this.noticias }>
          { content }
        </div>
      </div>
    )
  }
}

export default Noticias;
