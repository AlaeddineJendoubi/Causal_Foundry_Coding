import {useQuery} from 'react-query';
import usersService from '../services/users';

export const useFetchUserName = (userID: number) => {
  const {data} = useQuery(
    [`fetchUserNameById${userID}`],
    () => usersService.getUserNameById(userID),
    {
      enabled: true,
    },
  );
  const userFullName = data?.firstName + ' ' + data?.lastName;
  return {userName: userFullName || ('unknown' as string)};
};
