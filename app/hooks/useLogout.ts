import {useQuery} from 'react-query';
import AuthService from '../services/auth';
import {useNavigation} from '@react-navigation/native';
import {getActions, setNewAction} from '../services/tracking';

export const useLogout = () => {
  const {reset} = useNavigation();
  const {refetch, isFetching} = useQuery(
    ['logoutUserService'],
    () => AuthService?.signOutUserService,
    {
      enabled: false,
      onSuccess: () => {
        setNewAction('logout');
        reset({
          index: 0,
          routes: [{name: 'Login' as never}],
        });
      },
    },
  );

  return {logout: refetch, isLoading: isFetching};
};
