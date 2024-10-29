import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ButtonIcon} from '../../components/ButtonIcon';
import {useLogout} from '../../hooks/useLogout';
import {Text} from '@ui-kitten/components';
import {Spacer} from '../../components/Spacer';
import {PostsList} from './components/postsList';
import {useFetchConnectedUserData} from '../../hooks/useFetchConnectedUserData';
import {PostsSearchField} from './components/postsSearchField';

export const Home: FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const {isLoading, logout} = useLogout();

  const {getUserData, userData} = useFetchConnectedUserData();

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
      <PostsSearchField
        textSearch={searchText}
        handleText={t => setSearchText(t)}
        clearText={() => setSearchText('')}
      />
      <PostsList searchQuery={searchText} />

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
