import { ONEDESTINY_TOKEN_KEY } from '../config/config';

export const isAuthenticated = () => localStorage.getItem(ONEDESTINY_TOKEN_KEY) !== null ? true : false;
export const logout = () => localStorage.removeItem(ONEDESTINY_TOKEN_KEY);
export const getToken = () => localStorage.getItem(ONEDESTINY_TOKEN_KEY);
export const setToken = (token) => localStorage.setItem(ONEDESTINY_TOKEN_KEY, token);
