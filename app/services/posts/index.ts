import {Api} from '../../api/client';

class PostsService {
  getPostsService = async (skip: number) => {
    try {
      const responseData = await Api?.posts?.getPostsRequest(skip);

      return responseData?.data;
    } catch (error) {}
  };

  searchPostsService = async (query: string) => {
    if (query?.length > 0) {
      try {
        const responseData = await Api?.posts?.searchPosts(query);

        return responseData?.data;
      } catch (error) {}
    }
  };
}

export default new PostsService();
