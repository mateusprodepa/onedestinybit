import { ONEDESTINY_TOKEN_KEY } from '../config/config';

export const isAuthenticated = () => {
  if(localStorage.getItem(ONEDESTINY_TOKEN_KEY) !== null) {
    return true;
  }

  return false;
}

export const logOut = () => {
  localStorage.removeItem(ONEDESTINY_TOKEN_KEY);
}

export const getToken = () => {
  return localStorage.getItem(ONEDESTINY_TOKEN_KEY);
}
