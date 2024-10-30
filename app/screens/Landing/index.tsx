import React, {FC, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSession} from '../../hooks/useSession';
import tracking from '../../services/tracking';

export const LandingScreen: FC = () => {
  useSession();
  useEffect(() => {
    tracking?.setNewAction('app_open');
  }, []);
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
