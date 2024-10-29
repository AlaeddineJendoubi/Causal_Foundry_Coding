import {BASE_MOCK_API_URL, httpClient} from '../client';
import {PostsDataResponse} from '../types';
export const POSTS_LIMIT = 5;
export default {
  getPostsRequest: (skip: number) =>
    httpClient.get<PostsDataResponse>(
      `${BASE_MOCK_API_URL}/posts?limit=${POSTS_LIMIT}&skip=${
        skip * POSTS_LIMIT || 0
      }`,
    ),
  searchPosts: (query: string) =>
    httpClient.get<PostsDataResponse>(`${BASE_MOCK_API_URL}/posts?q=${query}`),
};
