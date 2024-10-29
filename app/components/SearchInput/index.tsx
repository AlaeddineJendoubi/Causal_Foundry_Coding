import React, {FC, useState} from 'react';

import {Input, InputProps} from '@ui-kitten/components';
import {ActionIcon} from '../ActionIcon';
import {StyleSheet} from 'react-native';

interface SearchInputProps extends InputProps {
  clearText: () => void;
  searchText: string;
  isEmptyField: boolean;
}
export const SearchInput: FC<SearchInputProps> = ({
  clearText,
  isEmptyField,
  ...rest
}) => {
  const searchAccessory = () => (
    <ActionIcon
      name={isEmptyField ? 'search-outline' : 'close-outline'}
      action={clearText}
      style={styles?.icon}
    />
  );

  return <Input {...rest} accessoryRight={searchAccessory} />;
};
const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
