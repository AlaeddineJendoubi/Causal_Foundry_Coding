import React from 'react';
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import {Home} from '..';
import {useFetchConnectedUserData} from '../../../hooks/useFetchConnectedUserData';
import {useLogout} from '../../../hooks/useLogout';
import {Text} from '@ui-kitten/components';

jest.mock('../../hooks/useLogout', () => ({
  useLogout: jest.fn(() => ({
    isLoading: false,
    logout: jest.fn(),
  })),
}));

jest.mock('../../hooks/useFetchConnectedUserData', () => ({
  useFetchConnectedUserData: jest.fn(() => ({
    getUserData: jest.fn(),
    userData: null,
  })),
}));

jest.mock('../components/PostsSearchField', () => {
  return (props: {textSearch: string; handleText: (text: string) => void}) => (
    <Text onPress={() => props.handleText('test')}>{props.textSearch}</Text>
  );
});

jest.mock('../components/PostsList', () => () => <Text>Posts List</Text>);

describe('Home Component', () => {
  const mockLogout = jest.fn();
  const mockGetUserData = jest.fn();

  beforeEach(() => {
    (useLogout as jest.Mock).mockReturnValue({
      isLoading: false,
      logout: mockLogout,
    });

    (useFetchConnectedUserData as jest.Mock).mockReturnValue({
      getUserData: mockGetUserData,
      userData: null,
    });
  });

  it('should call getUserData on mount', async () => {
    render(<Home />);
    expect(mockGetUserData).toHaveBeenCalled();
  });

  it('should display loading text while fetching user data', () => {
    (useFetchConnectedUserData as jest.Mock).mockReturnValueOnce({
      getUserData: mockGetUserData,
      userData: null,
    });

    const {getByText} = render(<Home />);
    expect(getByText('Loading...')).toBeTruthy();
  });

  it('should display user name when userData is fetched', async () => {
    (useFetchConnectedUserData as jest.Mock).mockReturnValueOnce({
      getUserData: mockGetUserData,
      userData: {firstName: 'John'},
    });

    const {getByText} = render(<Home />);

    await waitFor(() => {
      expect(getByText('Welcome John')).toBeTruthy();
    });
  });

  it('should call logout function when logout button is pressed', () => {
    (useFetchConnectedUserData as jest.Mock).mockReturnValueOnce({
      getUserData: mockGetUserData,
      userData: {firstName: 'John'},
    });

    const {getByText} = render(<Home />);

    fireEvent.press(getByText('Logout'));
    expect(mockLogout).toHaveBeenCalled();
  });

  it('should update search text when PostsSearchField is pressed', async () => {
    (useFetchConnectedUserData as jest.Mock).mockReturnValueOnce({
      getUserData: mockGetUserData,
      userData: {firstName: 'John'},
    });

    const {getByText} = render(<Home />);

    fireEvent.press(getByText(''));
    await waitFor(() => {
      expect(getByText('test')).toBeTruthy();
    });
  });
});
