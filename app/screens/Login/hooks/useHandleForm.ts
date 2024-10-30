import {useEffect, useState} from 'react';
import {useAuthUser} from '../../../hooks/useAuthUser';

export const useHandleForm = () => {
  const [userName, setUserName] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const {login, error, isFetching} = useAuthUser({
    username: userName,
    password: userPassword,
  });
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);

  const isFormValid = userName?.length > 0 && userPassword?.length > 0;

  const handleUserName = (inputUserName: string) => {
    setUserName(inputUserName);
  };

  const handleUserPassword = (inputUserPassword: string) => {
    setUserPassword(inputUserPassword);
  };

  const handleLogin = async () => {
    if (isFormValid) {
      try {
        await login();
      } catch (e) {
        console.log('err', e);
      }
    }
  };

  useEffect(() => {
    setErrorMsg(null);
  }, [userName, userPassword]);

  useEffect(() => {
    setErrorMsg(error?.message);
  }, [error?.message]);
  return {
    isLoading: isFetching,
    error: errorMsg,
    handleLogin,
    isFormValid,
    userName,
    userPassword,
    handleUserName,
    handleUserPassword,
  };
};
