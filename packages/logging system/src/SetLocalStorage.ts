import { postLog } from './apis/postLog';
import { LogRequestList, LogType } from './types/LogType';

export const SetLocalStorageClear = () => {
  const list: any[] = [];
  localStorage.setItem('yls-web', JSON.stringify(list));
};

export const SetLocalStorage = async (logger: LogType) => {
  if (window.localStorage.getItem('yls-web') == undefined) {
    const list: any[] = [];
    list.push(logger);
    localStorage.setItem('yls-web', JSON.stringify(list));
  } else {
    const remainList: any[] = JSON.parse(localStorage.getItem('yls-web') as string) || [];
    if (remainList.length < 10) {
      const updateList = [...remainList, logger];
      localStorage.setItem('yls-web', JSON.stringify(updateList));
    } else {
      const req: LogRequestList = {
        logRequestList: remainList,
      };
      const res = await postLog(req);

      if (res.success) {
        SetLocalStorageClear();
      }
    }
  }
};
