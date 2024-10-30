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
      <SectionList left="Email" right={userData?.email} />
      <SectionList left="Phone" right={userData?.phone} />
      <SectionList left="Username" right={userData?.username} />
      <SectionList left="Gender" right={userData?.gender} />
      <SectionList left="Date of birth" right={userData?.birthDate} />
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
