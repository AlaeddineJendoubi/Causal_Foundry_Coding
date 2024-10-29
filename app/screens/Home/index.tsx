import React, {FC, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonIcon} from '../../components/ButtonIcon';
import {useLogout} from '../../hooks/useLogout';
import {useFetchUserData} from '../../hooks/useFetchUserData';
import {useFocusEffect} from '@react-navigation/native';
import {Text} from '@ui-kitten/components';
import {Spacer} from '../../components/Spacer';

export const Home: FC = () => {
  const {isLoading, logout} = useLogout();

  const {getUserData, userData} = useFetchUserData();

  useEffect(() => {
    !userData && getUserData();
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Spacer size={10} />
        <Text style={styles?.textStyle}>Welcome {userData?.firstName}</Text>
        <Spacer line size={10} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonIcon
          isLoading={isLoading}
          text="Logout"
          status="danger"
          iconName="log-out-outline"
          iconColor="white"
          onPress={() => logout()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textStyle: {
    textAlign: 'center',
  },
  buttonContainer: {
    padding: 16,
  },
});
