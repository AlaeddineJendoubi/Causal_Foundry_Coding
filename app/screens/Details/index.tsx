import {Text} from '@ui-kitten/components';
import React, {FC, useEffect} from 'react';
import PostItem from '../../components/PostItem';
import {Spacer} from '../../components/Spacer';
import {ScrollView, StyleSheet} from 'react-native';

import {UserDetailsCard} from './components/userDetailsCard';
import {Post} from '../../api/types';
import tracking from '../../services/tracking';

export const Details: FC = ({route}) => {
  const post = route?.params?.post as Post;
  useEffect(() => {
    tracking?.setNewAction('post-detail-screen');
  }, []);
  return (
    <ScrollView>
      <Spacer size={10} />
      <Text style={styles?.titleStyle} category="h4">
        Post details
      </Text>
      <Spacer line size={10} />
      <PostItem post={post} />
      <Spacer size={10} />
      <Text style={styles?.titleStyle} category="h4">
        User details
      </Text>
      <Spacer line size={10} />
      <UserDetailsCard userID={post?.userId} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    textAlign: 'center',
  },
});
