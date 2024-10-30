/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import * as eva from '@eva-design/eva';
import {AppNavigator} from './app/navigation/AppNavigator';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {QueryClient, QueryClientProvider} from 'react-query';
import {useAppActivity} from './app/hooks/useAppActivity';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});
function App(): React.JSX.Element {
  if (__DEV__) {
    require('./ReactotronConfig');
  }
  const isDarkMode = useColorScheme() === 'dark';
  useAppActivity();

  return (
    <QueryClientProvider client={queryClient}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={isDarkMode ? eva.dark : eva.light}>
        <AppNavigator />
      </ApplicationProvider>
    </QueryClientProvider>
  );
}

export default App;
