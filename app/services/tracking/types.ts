export type ActionType =
  | 'app_open'
  | 'login_screen'
  | 'login'
  | 'post-list-screen'
  | 'post-click'
  | 'post-detail-screen'
  | 'logout'
  | 'app_close';

export interface Action {
  action: ActionType;
  ts: string;
}

export interface LogType {
  username: string;
  data: Action[];
}
