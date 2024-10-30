import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Login} from '../../Login';
import {useHandleForm} from '../hooks/useHandleForm';
import tracking from '../../../services/tracking';
import {Text} from '@ui-kitten/components';

jest.mock('./hooks/useHandleForm', () => ({
  useHandleForm: jest.fn(),
}));

jest.mock('../../services/tracking', () => ({
  setNewAction: jest.fn(),
}));

jest.mock('../../components/InputField', () => {
  return ({value, onChangeText, placeholder}) => (
    <Text onPress={() => onChangeText(value)}>{placeholder}</Text>
  );
});

jest.mock('../../components/ButtonIcon', () => {
  return ({onPress, text, disabled}) => (
    <Text onPress={disabled ? undefined : onPress}>{text}</Text>
  );
});

describe('Login Component', () => {
  const mockHandleLogin = jest.fn();
  const mockHandleUserName = jest.fn();
  const mockHandleUserPassword = jest.fn();

  beforeEach(() => {
    (useHandleForm as jest.Mock).mockReturnValue({
      isFormValid: true,
      handleUserName: mockHandleUserName,
      handleUserPassword: mockHandleUserPassword,
      handleLogin: mockHandleLogin,
      isLoading: false,
    });
  });

  it('should call tracking setNewAction on mount', () => {
    render(<Login />);
    expect(tracking.setNewAction).toHaveBeenCalledWith('login_screen');
  });

  it('should call handleUserName and handleUserPassword with dummy data', () => {
    render(<Login />);
    expect(mockHandleUserName).toHaveBeenCalledWith('michaelw');
    expect(mockHandleUserPassword).toHaveBeenCalledWith('michaelwpass');
  });

  it('should call handleLogin when button is pressed', () => {
    const {getByText} = render(<Login />);
    fireEvent.press(getByText('Sign in'));
    expect(mockHandleLogin).toHaveBeenCalled();
  });

  it('should disable button when form is not valid', () => {
    (useHandleForm as jest.Mock).mockReturnValueOnce({
      isFormValid: false,
      handleUserName: mockHandleUserName,
      handleUserPassword: mockHandleUserPassword,
      handleLogin: mockHandleLogin,
      isLoading: false,
    });
    const {getByText} = render(<Login />);
    expect(getByText('Sign in').props.onPress).toBeUndefined();
  });
});
