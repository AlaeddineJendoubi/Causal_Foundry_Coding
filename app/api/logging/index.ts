import {LogType} from '../../services/tracking/types';
import {BASE_MOCK_API_URL, httpClient} from '../client';

export default {
  uploadLogsRequest: (logs: LogType) =>
    httpClient.post<LogType, any>(`${BASE_MOCK_API_URL}/http/200`, logs),
};
