import {useQuery} from 'react-query';
import AuthService from '../services/auth';
import {useNavigation} from '@react-navigation/native';

export const useLogout = () => {
  const {reset} = useNavigation();
  const {data, refetch, isFetching, error} = useQuery(
    ['signInUserService'],
    () => AuthService?.signOutUserService,
    {
      enabled: false,
      onSuccess: () => {
        reset({
          index: 0,
          routes: [{name: 'Login' as never}],
        });
      },
    },
  );

  return {logout: refetch, isLoading: isFetching};
};
