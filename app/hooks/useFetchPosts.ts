import {useQuery} from 'react-query';
import postsService from '../services/posts';
import {useEffect, useState} from 'react';
import {Post} from '../api/types';
import {POSTS_LIMIT} from '../api/posts';

export const useFetchPosts = (query: string, skip: number) => {
  const [postsList, setPostsList] = useState<Post[]>();
  const {refetch, isFetching, data} = useQuery(
    ['fetchPosts'],
    () => postsService.getPostsService(skip),
    {
      onSuccess(data) {
        if (!!postsList && postsList?.length > 0 && data?.posts) {
          return setPostsList([...postsList, ...data?.posts]);
        } else {
          return setPostsList(data?.posts);
        }
      },
      enabled: skip >= 0 && skip * POSTS_LIMIT < data?.total,
    },
  );

  const searchResults = useQuery(
    [`searchPosts${query}`],
    () => postsService.searchPostsService(query),
    {
      enabled: false,
    },
  );

  useEffect(() => {
    searchResults?.refetch();
  }, [query]);

  useEffect(() => {
    refetch();
  }, [skip]);

  const postsData =
    query?.length > Number(1) ? searchResults?.data?.posts : postsList;

  console.log('got posts', postsList);

  return {fetchPosts: refetch, posts: postsData, isLoading: isFetching};
};
