import {useEffect, useState} from 'react';
import {AppState} from 'react-native';
import {getUserLogs, setNewAction} from '../services/tracking';

export const useAppActivity = () => {
  const [appState, setAppState] = useState(AppState.currentState);

  const fetchDataOnClose = async () => {
    const logs = getUserLogs(); // Make sure this function is defined
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      setAppState(nextAppState);
      if (nextAppState === 'background') {
        setNewAction('app_close');
        fetchDataOnClose();
      } else if (nextAppState === 'active') {
        setNewAction('app_open');
      }
    });

    return () => {
      subscription.remove(); // Clean up the subscription
    };
  }, [appState]);

  // You may want to log when the component mounts
  useEffect(() => {
    console.log('AppActivity Monitor initialized');
  }, []);
};
