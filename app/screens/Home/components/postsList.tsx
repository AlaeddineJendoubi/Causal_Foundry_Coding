import React, {FC, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useFetchPosts} from '../../../hooks/useFetchPosts';

import PostItem from '../../../components/PostItem';

export const PostsList: FC = () => {
  const {fetchPosts, posts} = useFetchPosts();

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <PostItem post={item} />}
      keyExtractor={item => String(item.id)}
    />
  );
};
