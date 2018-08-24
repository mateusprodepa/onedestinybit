import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userRequest } from '../../utils/utils';

import { endpoints, tmp } from '../../config/config';

import * as userActions from '../../actions/user';

import './User.css';

class UserBlock extends Component {

  state = {
    user: {}
  }

  fetchUserData = () => {
    return new Promise(resolve => {
      userRequest(endpoints.USER_DATA_URL)

      .then(userData => {
        this.props.setUserData(userData);
        resolve(userData);
      })
    })
  }

  renderUserProfileImage = () => {
    const userImg = this.state.user.Usuario_Imagem ?
                    this.state.user.Usuario_Imagem :
                    tmp.USER_IMG

    return (
      <div>
        <img
          alt="userImage"
          className="UserProfileImage"
          src={ userImg } />
      </div>
    )

  }

  renderUserBlock = () => {
    const self = this;
    return (
      <div className="UserProfileBlock">
        <div className="UserProfileWrapper">
          <div className="UserProfileFlex">

            <div className="UserBlockImage">
              { self.renderUserProfileImage() }
            </div>

            <div className="UserBlockName">
              <h3>{ this.state.user.username }</h3>
            </div>

          </div>
        </div>
      </div>
    )
  }

  updateUserState = user => this.setState({ user });

  componentDidMount() {
    if(this.props.user.length <= 0) {
      this.fetchUserData()
      .then(data => {
        console.log(data);
        this.updateUserState(data);
      })
    } else {
      this.updateUserState(this.props.user[0].profile);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="UserBlock">
          { this.renderUserBlock() }
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
