import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useSession} from '../../hooks/useSession';

export const LandingScreen: FC = () => {
  useSession();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};
