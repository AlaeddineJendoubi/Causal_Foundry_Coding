import {Text} from '@ui-kitten/components';
import React, {FC} from 'react';
import {View} from 'react-native';

export const Home: FC = () => {
  return (
    <View>
      <Text style={{alignSelf: 'center'}} category="h2">
        This is Home
      </Text>
    </View>
  );
};
