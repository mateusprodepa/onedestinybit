import { ONEDESTINY_TOKEN_KEY } from '../config/config';

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

export {
  auth
}
