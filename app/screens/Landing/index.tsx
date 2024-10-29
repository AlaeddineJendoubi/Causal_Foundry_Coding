import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSession} from '../../hooks/useSession';

export const LandingScreen: FC = () => {
  useSession();

  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
