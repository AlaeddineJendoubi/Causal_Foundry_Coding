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

  return {fetchPosts: refetch, posts: data?.posts, isLoading: isFetching};
};
