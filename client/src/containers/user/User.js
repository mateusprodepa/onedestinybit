import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../../actions/user';

import './User.css';

class UserBlock extends Component {

  constructor(props) {
    super(props);
    this.props.getUserData();
  }

  renderUserProfileImage = () => {

  }

  renderUserBlockImage = () => {
    const self = this;
    return (
      <div className="UserBlockImage">
          { self.renderUserProfileImage() }
      </div>
    )
  }

  render() {
    return (
      <div className="UserBlock">
        { this.renderUserBlockImage() }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActions, dispatch);

export default connect(null, mapDispatchToProps)(UserBlock);
