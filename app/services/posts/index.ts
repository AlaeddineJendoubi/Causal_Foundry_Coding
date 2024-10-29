import {Api} from '../../api/client';

class PostsService {
  getPostsService = async () => {
    try {
      const responseData = await Api?.posts?.getPostsRequest();

      return responseData?.data;
    } catch (error) {}
  };
}

export default new PostsService();
