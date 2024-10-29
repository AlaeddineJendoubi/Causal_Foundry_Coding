import {useQuery} from 'react-query';
import AuthService from '../services/auth';
import {User} from '../api/types';

export const useFetchUserData = () => {
  const {refetch, isFetching, data} = useQuery(
    ['fetchUserData'],
    AuthService.fetchUserDataService,
    {
      enabled: false,
    },
  );
  return {getUserData: refetch, isLoading: isFetching, userData: data as User};
};
