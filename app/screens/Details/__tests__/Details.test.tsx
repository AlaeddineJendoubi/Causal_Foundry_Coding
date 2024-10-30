import React from 'react';
import {render} from '@testing-library/react-native';
import {Details} from '../../Details';
import {Post} from '../../../api/types';
import {useRoute} from '@react-navigation/native';
import tracking from '../../../services/tracking';
import {Text} from '@ui-kitten/components';

jest.mock('../../services/tracking', () => ({
  setNewAction: jest.fn(),
}));

jest.mock('../../components/PostItem', () => {
  return ({post}: {post: Post}) => <Text>{post.title}</Text>;
});

jest.mock('../../components/Spacer', () => {
  return ({size}: {size: number}) => <Text>{`Spacer ${size}`}</Text>;
});

jest.mock('./components/userDetailsCard', () => {
  return ({userID}: {userID: string}) => <Text>{`User ID: ${userID}`}</Text>;
});

describe('Details Component', () => {
  const mockPost: Post = {
    userId: '123',
    id: '1',
    title: 'Sample Post',
    body: 'This is a sample post body.',
  };

  beforeEach(() => {
    (useRoute as jest.Mock).mockReturnValue({
      params: {
        post: mockPost,
      },
    });
  });

  it('should render post details correctly', () => {
    const {getByText} = render(<Details route={{params: {post: mockPost}}} />);
    expect(getByText('Post details')).toBeTruthy();
    expect(getByText('Sample Post')).toBeTruthy();
    expect(getByText('User details')).toBeTruthy();
    expect(getByText('User ID: 123')).toBeTruthy();
  });

  it('should call tracking setNewAction on mount', () => {
    render(<Details route={{params: {post: mockPost}}} />);
    expect(tracking.setNewAction).toHaveBeenCalledWith('post-detail-screen');
  });
});
