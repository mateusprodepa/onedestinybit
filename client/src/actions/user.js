import { types } from '../config/config';

export function setUserData(data) {
  return {
    type: types.SET_USER_DATA,
    data
  }
}
