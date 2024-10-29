import {BASE_MOCK_API_URL, httpClient} from '../client';
import {User, UserNameResponse} from '../types';

export default {
  getUserNameById: (userId: number) =>
    httpClient.get<UserNameResponse>(
      `${BASE_MOCK_API_URL}/users/${userId}?select=firstName,lastName`,
    ),
  getUserDataById: (userId: number) =>
    httpClient.get<User>(`${BASE_MOCK_API_URL}/users/${userId}`),
};
