import {useQuery} from 'react-query';
import {ErrorType, SignInDataType} from '../api/types';
import AuthService from '../services/auth';
import tracking from '../services/tracking';
import {useNavigation} from '@react-navigation/native';

export const useAuthUser = (signInData: SignInDataType) => {
  const {reset} = useNavigation();

  const {data, refetch, isFetching, error} = useQuery(
    ['signInUserService'],
    () => AuthService?.signInUserService(signInData),
    {
      enabled: false,
      onError(err) {
        console.log('error', err);
      },
      onSuccess: () => {
        tracking?.setNewAction('login');
        reset({
          index: 0,
          routes: [{name: 'Home' as never}],
        });
      },
    },
  );

  return {data, login: refetch, isFetching, error: error as ErrorType};
};
