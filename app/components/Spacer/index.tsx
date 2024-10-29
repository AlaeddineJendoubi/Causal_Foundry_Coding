import {Size} from '@ui-kitten/components/devsupport';
import React, {FC} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

interface SpacerProps extends ViewProps {
  line?: boolean;
  color?: string;
  size?: number;
}

export const Spacer: FC<SpacerProps> = ({line, color, size}) => {
  return <View style={styles(line, color, size).spacer} />;
};

const styles = (line?: boolean, color?: string, size?: number) =>
  StyleSheet.create({
    spacer: {
      height: line ? 1 : 0,
      width: '90%',
      backgroundColor: color || 'black',
      opacity: 0.7,
      alignSelf: 'center',
      marginVertical: size,
    },
  });
