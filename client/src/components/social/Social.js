import React, { Component } from 'react';

import PropTypes from 'prop-types';

// Icons
import GooglePlusIcon from '../../assets/icons/google-plus.png';
import FacebookIcon from '../../assets/icons/facebook.png';
import TwitterIcon from '../../assets/icons/twitter.png';

const Google = props => {
  return (
    <div
      ref={ props.google }
      onClick={ props.clicked }>
      <img alt="google-plus" src={ GooglePlusIcon } aria-label="social-media"></img>
    </div>
  )
}

const Facebook = props => {
  return (
    <div
      ref={ props.facebook }
      onClick={ props.clicked }>
      <img alt="facebook" src={ FacebookIcon } aria-label="social-media"></img>
    </div>
  )
}

const Twitter = props => {
  return (
    <div
      ref={ props.twitter }
      onClick={ props.clicked }>
      <img alt="twitter" src={ TwitterIcon } aria-label="social-media"></img>
    </div>
  )
}

class SocialMedia extends Component {
  constructor(props) {
    super(props);
    this.googlePlus = React.createRef();
    this.facebook = React.createRef();
    this.twitter = React.createRef();
  }

  animateSocialMedia = e => {
    const refs = {
      googlePlus: this.googlePlus,
      facebook: this.facebook,
      twitter: this.twitter
    }

    for(var x in refs) {
      const social = refs[x].current;
      const animDelay = 2500;
      if(social === e.target) {
        social.classList.add('expanded');
        setTimeout(() => social.classList.remove('expanded'), animDelay);
      } else {
        social.classList.add('closed');
        setTimeout(() => social.classList.remove('closed'), animDelay);
      }
    }
  }

  render() {
    return (
      <div className="social-media">
        <Google
          clicked={ (e) => this.animateSocialMedia(e) }
          google={ this.googlePlus }/>
        <Facebook
          clicked={ (e) => this.animateSocialMedia(e) }
          facebook={ this.facebook }/>
        <Twitter
          clicked={ (e) => this.animateSocialMedia(e) }
          twitter={ this.twitter }/>
      </div>
    )
  }
}

export default SocialMedia;

Google.propTypes = {
  clicked: PropTypes.func.isRequired,
  google: PropTypes.object.isRequired
}

Twitter.propTypes = {
  clicked: PropTypes.func.isRequired,
  twitter: PropTypes.object.isRequired
}

Facebook.propTypes = {
  clicked: PropTypes.func.isRequired,
  facebook: PropTypes.object.isRequired
}
