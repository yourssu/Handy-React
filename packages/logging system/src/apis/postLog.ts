import { LogRequestList, LogResponse } from '../types/LogType';

import { customedAxios } from './customedAxios';

export const postLog = async (data: LogRequestList): Promise<LogResponse> => {
  const res = await customedAxios.put('/log/list', data);
  return res.data;
};
