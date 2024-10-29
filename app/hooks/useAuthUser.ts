import {useQuery} from 'react-query';
import {SignInDataType} from '../api/types';
import AuthService from '../services/auth';

export const useAuthUser = (signInData: SignInDataType) => {
  const {data, refetch, isFetching, error} = useQuery(
    ['signInUserService'],
    () => AuthService?.signInUserService(signInData),
    {
      enabled: false,
      onError(err) {
        console.log('error', err);
      },
    },
  );

  return {data, refetch, isFetching, error};
};
