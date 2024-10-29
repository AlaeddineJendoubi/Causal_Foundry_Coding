import axios from 'axios';
import auth from './auth';
import {TokenType} from './types';

export const BASE_MOCK_API_URL = 'https://dummyjson.com';

let accessToken = '';
let refreshToken = '';

export const setAccessToken = (val: string) => {
  if (val) {
    accessToken = val;
  }
  if (!val) {
    console.error('something went wrong while setting access token');
  }
};

export const setRefreshToken = (val: string) => {
  if (val) {
    refreshToken = val;
  }
  if (!val) {
    console.error('something went wrong while setting access token');
  }
};

export const setToken = (token: string, type: TokenType) => {
  switch (type) {
    case 'accessToken':
      setAccessToken(token);
      break;
    case 'refreshToken':
      setRefreshToken(token);
      break;
    default:
      break;
  }
};

export const getAccessToken = () => accessToken;
export const getRefreshToken = () => refreshToken;

export const removeAuthorizationTokens = () => {
  accessToken = '';
  refreshToken = '';
};

export const httpClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// @ts-ignore-next-line
httpClient.interceptors.request.use(request => {
  request.headers['Accept'] = '*/*';
  if (accessToken) {
    request.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return request;
});

httpClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      return Promise.reject(error.response.data);
    } else if (error.request) {
      console.error('Request Error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  },
);

export const Api = {
  auth,
};
