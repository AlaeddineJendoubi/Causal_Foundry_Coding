import {useEffect, useRef, useState} from 'react';
import {AppState} from 'react-native';
import trackingService from '../services/tracking';

export const useAppActivity = () => {
  const appState = useRef(AppState.currentState);
  const [isMounted, setIsMounted] = useState(appState.current);

  const uploadLogs = async () => {
    const logs = trackingService?.getUserLogs();
    await trackingService.uploadLogs(logs);
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      setIsMounted(nextAppState || AppState.currentState);
    });
    const focusSub = AppState?.addEventListener('focus', () => {
      setIsMounted('active');
      trackingService?.setNewAction('app_open');
    });
    const blureSub = AppState?.addEventListener('blur', () => {
      setIsMounted('inactive');
      uploadLogs();
      trackingService?.setNewAction('app_close');
    });
    return () => {
      subscription.remove();
      blureSub.remove();
      focusSub.remove();
    };
  }, [setIsMounted]);

  return {isMounted};
};
