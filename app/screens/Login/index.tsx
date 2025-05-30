import {Icon, Text} from '@ui-kitten/components';
import React, {FC, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {InputField} from '../../components/InputField';
import {Spacer} from '../../components/Spacer';
import {useHandleForm} from './hooks/useHandleForm';
import {ButtonIcon} from '../../components/ButtonIcon';
import tracking from '../../services/tracking';

export const Login: FC = () => {
  const {
    isFormValid,
    handleUserName,
    handleUserPassword,
    handleLogin,
    isLoading,
    error,
  } = useHandleForm();

  useEffect(() => {
    tracking?.setNewAction('login_screen');
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
          onChangeText={handleUserName}
          hasIcon
          iconName="person-outline"
          placeholder="User Name"
        />
        <Spacer size={10} />
        <InputField
          onChangeText={handleUserPassword}
          hasIcon
          isSecure
          placeholder="Password"
        />
        <Spacer size={10} />

        {error && !isLoading && (
          <Text style={styles.errorStyle} category="label" status="danger">
            {error}
          </Text>
        )}
        <Spacer line size={20} />

        <ButtonIcon
          iconColor="white"
          text="Sign in"
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
  errorStyle: {
    textAlign: 'center',
  },
});
