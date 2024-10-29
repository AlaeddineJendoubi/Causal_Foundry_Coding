import React, {FC, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useFetchPosts} from '../../../hooks/useFetchPosts';
import PostItem from '../../../components/PostItem';
import {useNavigation} from '@react-navigation/native';
import {Post} from '../../../api/types';

export const PostsList: FC = () => {
  const {fetchPosts, posts, isLoading} = useFetchPosts();
  const {navigate} = useNavigation();
  useEffect(() => {
    fetchPosts();
  }, []);

  const handleOnPress = (post: Post) => {
    navigate('Details', {post});
  };
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <PostItem post={item} onPress={handleOnPress} />}
      keyExtractor={item => String(item.id)}
      refreshing={isLoading}
    />
  );
};
