import React, {FC, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSession} from '../../hooks/useSession';
import {setNewAction} from '../../services/tracking';

export const LandingScreen: FC = () => {
  useSession();
  useEffect(() => {
    setNewAction('app_open');
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
