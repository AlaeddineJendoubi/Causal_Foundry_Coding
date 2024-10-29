import {Api} from '../../api/client';

class UsersService {
  getUserNameById = async (userID: number) => {
    try {
      const responseData = await Api?.users?.getUserNameById(userID);

      return responseData?.data;
    } catch (error) {}
  };

  getUserById = async (userID: number) => {
    try {
      const responseData = await Api?.users?.getUserDataById(userID);

      return responseData?.data;
    } catch (error) {}
  };
}

export default new UsersService();
