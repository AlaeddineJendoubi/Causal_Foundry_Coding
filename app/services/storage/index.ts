import {setToken} from '../../api/client';
import * as Keychain from 'react-native-keychain';
import {TokenType} from '../../api/types';

class StorageService {
  setDataToStorage = async (type: TokenType, data: string) => {
    if (data) {
      setToken(data, type);
      await Keychain.setGenericPassword(type, data);
    } else {
      console.error('something went wrong while setting access token');
    }
  };

  getTokenFromStorage = async (type: TokenType) => {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials && credentials.username === type) {
        return credentials.password as string;
      }
      return undefined;
    } catch (error) {
      console.log('error getting token from storage', error);
    }
  };

  resetStorage = async () => {
    await Keychain.resetGenericPassword();
  };
}

export default new StorageService();
