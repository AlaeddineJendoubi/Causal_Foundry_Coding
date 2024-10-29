import {Input, InputProps} from '@ui-kitten/components';
import React, {FC, useState} from 'react';
import {StyleSheet} from 'react-native';
import {ActionIcon} from '../ActionIcon';

interface InputFieldProps extends InputProps {
  isSecure?: boolean;
  hasIcon?: boolean;
  iconName?: string;
}

export const InputField: FC<InputFieldProps> = ({
  isSecure,
  hasIcon,
  iconName,
  ...rest
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(!!isSecure);

  const handleVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const secureAccessory = () =>
    hasIcon ? (
      <ActionIcon
        name={!secureTextEntry ? 'eye-off' : 'eye'}
        action={handleVisibility}
        style={styles?.icon}
      />
    ) : (
      <></>
    );

  const accessory = () =>
    hasIcon && iconName ? (
      <ActionIcon name={iconName} action={() => null} style={styles?.icon} />
    ) : (
      <></>
    );

  return (
    <Input
      {...rest}
      secureTextEntry={secureTextEntry}
      accessoryRight={isSecure ? secureAccessory : accessory}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
