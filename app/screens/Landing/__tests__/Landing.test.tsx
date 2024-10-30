import React from 'react';
import {render} from '@testing-library/react-native';
import {LandingScreen} from '../../Landing';
import tracking from '../../../services/tracking';

jest.mock('../../hooks/useSession', () => ({
  useSession: jest.fn(),
}));

jest.mock('../../services/tracking', () => ({
  setNewAction: jest.fn(),
}));

describe('LandingScreen Component', () => {
  it('should call tracking setNewAction on mount', () => {
    render(<LandingScreen />);
    expect(tracking.setNewAction).toHaveBeenCalledWith('app_open');
  });

  it('should render ActivityIndicator', () => {
    const {getByRole} = render(<LandingScreen />);
    expect(getByRole('spinner')).toBeTruthy();
  });
});
