import {useQuery} from 'react-query';
import storageService from '../services/storage';
import auth from '../services/auth';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export const useSession = () => {
  const [refreshToken, setRefreshToken] = useState<string | undefined>(
    undefined,
  );
  const {navigate} = useNavigation();

  const navigateToLogin = () => {
    navigate('Login' as never);
  };

  const navigateToHome = () => {
    navigate('Home' as never);
  };

  const handleGetRefreshToken = async () => {
    const getRefreshToken = await storageService?.getTokenFromStorage(
      'refreshToken',
    );
    if (!getRefreshToken) {
      navigateToLogin();
    }
    setRefreshToken(getRefreshToken);
  };
  const {refetch} = useQuery(
    ['refreshTokenRequest'],
    () => auth?.refreshSession(String(refreshToken)),
    {
      enabled: false,
      onSuccess: () => {
        navigateToHome();
      },
    },
  );

  useEffect(() => {
    handleGetRefreshToken();
  }, []);

  useEffect(() => {
    console.log('token', refreshToken);
    if (!!refreshToken) {
      refetch();
    }
  }, [refreshToken]);
};
