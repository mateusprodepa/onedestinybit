import {
  ONEDESTINY_TOKEN_KEY,
  endpoints
} from '../config/config';

import axios from 'axios';

const userRequest = async function(URL) {

  return new Promise((resolve, reject) => {

    axios.get(URL, {
      headers: { Authorization: `Bearer ${auth.getToken()}` }
    })

    .then(res => {
      if(res) {
        resolve(res.data);
      }
    })

    .catch(err => err);

  });
  // if(userData) return userData;
}

const getUserData = async function() {
  let userData;
  await userRequest(endpoints.USER_DATA_URL).then(response => userData = response);

  return userData;
}

const auth = {

  isAuthenticated: () =>
    localStorage.getItem(ONEDESTINY_TOKEN_KEY) !== null ? true : false,

  logout: () =>
    localStorage.removeItem(ONEDESTINY_TOKEN_KEY),

  getToken: () =>
    localStorage.getItem(ONEDESTINY_TOKEN_KEY),

  setToken: token =>
    localStorage.setItem(ONEDESTINY_TOKEN_KEY, token)
}

const user = {
  fetchUserInformation: () => {
    const userData = getUserData();
    return userData;
  }
}

export {
  auth,
  user
}
