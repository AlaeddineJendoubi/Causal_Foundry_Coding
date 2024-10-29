import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/Login';
import {Home} from '../screens/Home';
import {MainContainer} from '../containers/mainContainer';
import {LandingScreen} from '../screens/Landing';
import {Details} from '../screens/Details';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <MainContainer>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Details"
            component={Details}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Landing"
            component={LandingScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MainContainer>
  );
};
