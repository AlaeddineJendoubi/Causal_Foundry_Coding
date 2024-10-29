import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonIcon} from '../../components/ButtonIcon';
import {useLogout} from '../../hooks/useLogout';

export const Home: FC = () => {
  const {isLoading, logout} = useLogout();
  return (
    <View style={styles.container}>
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
  buttonContainer: {
    padding: 16,
  },
});
