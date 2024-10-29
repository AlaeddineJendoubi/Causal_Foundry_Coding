import React, {FC, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useFetchPosts} from '../../../hooks/useFetchPosts';
import PostItem from '../../../components/PostItem';
import {useNavigation} from '@react-navigation/native';
import {Post} from '../../../api/types';
import {setNewAction} from '../../../services/tracking';

interface PostsListProps {
  searchQuery: string;
}
export const PostsList: FC<PostsListProps> = ({searchQuery}) => {
  const [page, setPage] = useState<number>(0);

  const {fetchPosts, posts, isLoading} = useFetchPosts(searchQuery, page);
  const {navigate} = useNavigation();
  useEffect(() => {
    fetchPosts();
  }, []);

  const handleOnPress = (post: Post) => {
    setNewAction('post-click');

    navigate('Details', {post});
  };

  return (
    <FlatList
      style={{flex: 1}}
      data={posts}
      renderItem={({item}) => <PostItem post={item} onPress={handleOnPress} />}
      keyExtractor={item => String(item.id)}
      refreshing={isLoading}
      onEndReachedThreshold={2}
      onEndReached={() => {
        setPage(page + 1);
      }}
    />
  );
};
