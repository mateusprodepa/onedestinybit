import { types } from '../config/config';

function user(state = [], action) {
  switch(action.type) {
    case types.SET_USER_DATA:
      return [
        ...state,
        { profile: action.data }
      ]
    default:
      return state;
  }
}

export default user;
