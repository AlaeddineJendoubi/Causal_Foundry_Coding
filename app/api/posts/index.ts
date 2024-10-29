import {BASE_MOCK_API_URL, httpClient} from '../client';
import {PostsDataResponse} from '../types';

export default {
  getPostsRequest: () =>
    httpClient.get<PostsDataResponse>(`${BASE_MOCK_API_URL}/posts`),
};
