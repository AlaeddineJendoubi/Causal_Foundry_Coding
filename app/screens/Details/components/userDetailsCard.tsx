import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {SectionList} from '../../../components/SectionList';
import {ImageLoader} from '../../../components/ImageLoader';
import {useFetchUserById} from '../../../hooks/useFetchUserById';
import {Spinner} from '@ui-kitten/components';
interface UserDetailsCardProps {
  userID: number;
}
export const UserDetailsCard: FC<UserDetailsCardProps> = ({userID}) => {
  const {userData, isLoading} = useFetchUserById(userID);

  return isLoading ? (
    <View style={styles?.spinnerStyle}>
      <Spinner size="giant" />
    </View>
  ) : (
    <View style={styles?.containerStyle}>
      <ImageLoader uri={userData?.image} size={100} />
      <SectionList
        left="Full Name"
        right={`${userData?.firstName} ${userData?.lastName}`}
      />
      <SectionList left="email" right={userData?.email} />
      <SectionList left="phone" right={userData?.phone} />
      <SectionList left="username" right={userData?.username} />
      <SectionList left="gender" right={userData?.gender} />
      <SectionList left="dob" right={userData?.birthDate} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 100,
  },
  spinnerStyle: {
    alignItems: 'center',
  },
});
