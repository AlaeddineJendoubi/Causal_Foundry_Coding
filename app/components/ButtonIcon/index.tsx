import {Button, ButtonProps, Text} from '@ui-kitten/components';
import React, {FC} from 'react';
import {ActionIcon} from '../ActionIcon';
import {ActivityIndicator, StyleSheet} from 'react-native';

interface ButtonIconProps extends ButtonProps {
  iconName?: string;
  text?: string;
  iconColor?: string;
  isLoading?: boolean;
}

export const ButtonIcon: FC<ButtonIconProps> = ({
  iconName,
  text,
  iconColor,
  isLoading,
  ...rest
}) => {
  const accessory = () =>
    isLoading ? (
      <ActivityIndicator color={iconColor} />
    ) : iconName ? (
      <ActionIcon
        fill={iconColor && iconColor}
        name={iconName}
        action={() => null}
        style={styles?.icon}
      />
    ) : (
      <></>
    );
  return (
    <Button accessoryRight={accessory} {...rest}>
      {!isLoading ? <Text>{text}</Text> : <></>}
    </Button>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});
