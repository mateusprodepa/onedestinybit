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

  scrollBar(e) {
    // e.target.scrollHeight 644
    // e.target.scrollTop + e.target.clientHeight
    // Number(window.getComputedStyle(e.target).height.match(/\d*/gi)[0]);
    // e.target.clientHeight 220

    if(e.scrollTop + e.clientHeight >= e.scrollHeight) {
      e.scrollTop = 0;
    } else {
      const scroll = e.clientHeight - 7;
      const actualScroll = e.scrollTop;
      e.scrollTop = actualScroll + scroll;
    }
  }

  onResize = () =>
    this.scrollBar(this.noticias.current);

  componentDidMount() {
    this.fetchNews();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    clearInterval(this.scrollInterval);
    window.removeEventListener('resize', this.onResize);
  }

  render() {

    const { noticias, isLoading } = this.state;
    let content;

    if(isLoading) {
      content = <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    } else {
      content = noticias.map((noticia, index) =>
        <Noticia
          id={ index }
          key={ noticia.Codigo }
          title={ noticia.Titulo}
          img={ noticia.Imagem }
          text={ noticia.Descricao } />);
      this.scrollInterval = setInterval(() => {
        this.scrollBar(this.noticias.current);
      }, 3000);
    }

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
