import {Icon, Text} from '@ui-kitten/components';
import React, {FC, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {InputField} from '../../components/InputField';
import {Spacer} from '../../components/Spacer';
import {useHandleForm} from './hooks/useHandleForm';
import {ButtonIcon} from '../../components/ButtonIcon';
import {setNewAction} from '../../services/tracking';

export const Login: FC = () => {
  const {
    isFormValid,
    handleUserName,
    handleUserPassword,
    handleLogin,
    isLoading,
  } = useHandleForm();

  const dummyData = {username: 'michaelw', password: 'michaelwpass'};

  useEffect(() => {
    handleUserName(dummyData?.username);
    handleUserPassword(dummyData?.password);
  });

  useEffect(() => {
    setNewAction('login_screen');
  }, []);
  return (
    <View style={styles?.mainContainerStyle}>
      <Icon style={styles?.icon} fill="#8F9BB3" name="person-outline" />
      <Spacer size={5} />

      <Text category="h4" style={styles?.titleStyle}>
        Sign in
      </Text>
      <Spacer size={10} />

      <View style={styles?.formContainer}>
        <InputField
          value={dummyData?.username}
          onChangeText={handleUserName}
          hasIcon
          iconName="person-outline"
          placeholder="User Name"
        />
        <Spacer size={10} />
        <InputField
          value={dummyData?.password}
          onChangeText={handleUserPassword}
          hasIcon
          isSecure
          placeholder="Password"
        />
        <Spacer line size={20} />

        <ButtonIcon
          iconColor="white"
          text="Sign in "
          iconName="log-in-outline"
          style={styles?.buttonStyle}
          disabled={!isFormValid}
          isLoading={isLoading}
          onPress={() => handleLogin()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {},
  formContainer: {
    width: '90%',
  },
  icon: {
    width: 50,
    height: 50,
  },
  buttonStyle: {
    marginHorizontal: '30%',
  },
});
