import {Text} from '@ui-kitten/components';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

interface MainContainerProps {
  children: React.ReactNode;
}
export const MainContainer: FC<MainContainerProps> = ({children}) => {
  return (
    <View style={styles?.containerStyle}>
      <>
        {children}
        <Text style={styles?.textStyle} appearance="hint" category="c2">
          DEVELOPED BY ALAEDDINE JENDOUBI @2024
        </Text>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {flex: 1},
  textStyle: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
