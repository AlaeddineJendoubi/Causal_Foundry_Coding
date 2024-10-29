import {Action, ActionType} from '../../api/types';

let actionsList: Action[] = [];

let username: string = '';

let userLogs = {username, data: actionsList};

export const getActions = () => actionsList;

export const setUserName = (userName: string) => {
  username = userName;
};

export const setNewAction = (action: ActionType) => {
  const prevAction = actionsList;
  const currentDate = new Date().toString();
  actionsList = [...prevAction, {action, ts: currentDate}];
};

export const getUserLogs = () => ({username, data: actionsList});
