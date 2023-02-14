import axios from 'axios';
const BASE_URL_RESOURCE = 'https://orbital-gather.herokuapp.com';
const BASE_URL_AUTH = 'https://orbital-gather.herokuapp.com';

/**
 * The axios instance that fetches data from the authentication server.
 */
export const axiosAuth = axios.create({
  baseURL: BASE_URL_AUTH,
  headers: { 'Access-Control-Allow-Credentials': true, 'Content-Type': 'application/json'}
})

/**
 * The axios instance that fetches data from the resource server.
 */
export const axiosResource = axios.create({
  baseURL: BASE_URL_RESOURCE,
  headers: { 'Access-Control-Allow-Credentials': true, 'Content-Type': 'application/json'}
})