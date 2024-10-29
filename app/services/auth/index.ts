import {Api, removeAuthorizationTokens} from '../../api/client';
import {SignInDataType, User} from '../../api/types';
import StorageService from '../storage';

class AuthService {
  initSession = async (refreshToken: string, accessToken: string) => {
    try {
      if (accessToken) {
        await StorageService.setDataToStorage('accessToken', accessToken);
      } else {
        console.log('No access token provided.');
      }

      if (refreshToken) {
        await StorageService.setDataToStorage('refreshToken', refreshToken);
      } else {
        console.log('No refresh token provided.');
      }
    } catch (e) {
      console.error('Something went wrong while storing tokens:', e);
    }
  };
  signInUserService = async (signInData: SignInDataType) => {
    try {
      const responseData = await Api?.auth.signInUserRequest(signInData);
      const {refreshToken, accessToken} = responseData?.data;
      this.initSession(refreshToken, accessToken);
    } catch (error) {
      throw error;
    }
  };

  refreshSession = async (refreshTokenStored: string) => {
    try {
      if (refreshTokenStored) {
        const responseData = await Api?.auth?.refreshUserToken({
          refreshToken: refreshTokenStored,
        });

        const {refreshToken, accessToken} = responseData?.data;
        this.initSession(refreshToken, accessToken);
      }
    } catch (error) {
      throw error;
    }
  };
  signOutUserService = async () => {
    await StorageService.resetStorage();
    removeAuthorizationTokens();
  };

  fetchUserDataService = async () => {
    const responseData = await Api?.auth?.fetchUserData();
    return responseData?.data as User;
  };
}

export default new AuthService();
