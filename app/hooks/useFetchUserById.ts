import {useQuery} from 'react-query';
import usersService from '../services/users';
import {User} from '../api/types';

export const useFetchUserById = (userID: number) => {
  const {data, isLoading} = useQuery(
    [`fetchUserDataById${userID}`],
    () => usersService.getUserById(userID),
    {
      enabled: true,
    },
  );

  return {userData: data as User, isLoading};
};
