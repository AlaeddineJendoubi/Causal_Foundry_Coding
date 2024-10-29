import {BASE_MOCK_API_URL, httpClient} from '../client';
import {SignInResponse, UserNameResponse} from '../types';

export default {
  getUserNameById: (userId: number) =>
    httpClient.get<UserNameResponse>(
      `${BASE_MOCK_API_URL}/users/${userId}?select=firstName,lastName`,
    ),
  getUserDataById: (userId: number) =>
    httpClient.get<SignInResponse>(`${BASE_MOCK_API_URL}/users/${userId}`),
};
