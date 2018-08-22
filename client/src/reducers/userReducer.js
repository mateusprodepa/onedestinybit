import { types } from '../config/config';
import { user as userActions } from '../utils/utils';

function user(state = [], action) {
  switch(action.type) {
    case types.GET_USER_DATA:
      const userData = userActions.fetchUserInformation();
      console.log(userData);
      return [
        ...state,
        userData
      ]
    default:
      return state;
  }
}

export default user;
