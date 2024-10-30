import logging from '../../api/logging';
import {Action, ActionType, LogType} from './types';

class TrackActionsService {
  actionsList: Action[] = [];

  username: string = '';

  getActions = () => this?.actionsList;

  setUserName = (userName: string) => {
    console.log('setting user name', userName);
    this.username = userName;
  };

  setNewAction = (action: ActionType) => {
    console.log('setting new action ', action);
    const prevAction = this.actionsList;
    const currentDate = new Date().toString();
    this.actionsList = [...prevAction, {action, ts: currentDate}];
  };

  getUserLogs = () =>
    ({username: this.username, data: this.actionsList} as LogType);

  uploadLogs = async (logs: LogType) => {
    try {
      await logging.uploadLogsRequest(logs);
    } catch (error) {
      console.log('error', error);
    }
  };
}

export default new TrackActionsService();
