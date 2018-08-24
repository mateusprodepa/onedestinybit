import React from 'react';

import './ProfilePage.css';

import UserBlock from '../../containers/user/User';

const ProfilePage = props => (
  <div className="ProfilePage">
    <UserBlock />
    <div className="UserStuffWrapper">

      <div className="UserMenuDisplay"></div>
      <div className="UserFeedWrapper"></div>
      <div className="UserRecommendations"></div>

    </div>
  </div>
)

export default ProfilePage;
