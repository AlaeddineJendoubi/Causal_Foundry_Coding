import {BASE_MOCK_API_URL, httpClient} from '../client';
import {
  GetUserResponse,
  RefreshTokenRequestType,
  RefreshTokenResponseType,
  SignInDataType,
  SignInResponse,
} from '../types';

export default {
  signInUserRequest: (data: SignInDataType) =>
    httpClient.post<SignInDataType, SignInResponse>(
      `${BASE_MOCK_API_URL}/auth/login`,
      JSON.stringify(data),
    ),

  refreshUserToken: (data: RefreshTokenRequestType) =>
    httpClient.post<RefreshTokenRequestType, RefreshTokenResponseType>(
      `${BASE_MOCK_API_URL}/auth/refresh`,
      JSON.stringify(data),
    ),

  fetchUserData: () =>
    httpClient.get<null, GetUserResponse>(`${BASE_MOCK_API_URL}/auth/me`),
};
