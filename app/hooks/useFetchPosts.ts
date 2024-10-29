import {useQuery} from 'react-query';
import postsService from '../services/posts';

export const useFetchPosts = () => {
  const {refetch, isFetching, data} = useQuery(
    ['fetchPosts'],
    postsService.getPostsService,
    {
      enabled: false,
    },
  );

  console.log('data', data);
  return {fetchPosts: refetch};
};
