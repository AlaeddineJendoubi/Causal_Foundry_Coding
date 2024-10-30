import {useState} from 'react';
import {useAuthUser} from '../../../hooks/useAuthUser';
import {useNavigation} from '@react-navigation/native';
import tracking from '../../../services/tracking';

export const useHandleForm = () => {
  const [userName, setUserName] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const {reset} = useNavigation();
  const {refetch, error, isFetching} = useAuthUser({
    username: userName,
    password: userPassword,
  });
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
        await refetch();
        tracking?.setNewAction('login');
        reset({
          index: 0,
          routes: [{name: 'Home' as never}], // Navigate to Home screen and reset the stack
        });
      } catch (e) {
        console.log('err', e);
      }
    }
  };

  return {
    isLoading: isFetching,
    error,
    handleLogin,
    isFormValid,
    userName,
    userPassword,
    handleUserName,
    handleUserPassword,
  };
};
