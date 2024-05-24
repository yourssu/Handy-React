// LogPayloadParams: 사용처에서 넣어주는 값
export interface LogPayloadParams {
  userId: string;
  version: number;
  event: any;
}

// LogType: 최종 Log 형태
export interface LogType {
  hashedID: string;
  timestamp: string;
  version: number;
  event: LogPayloadParams['event'];
}

export interface LogRequestList {
  logRequestList: LogType[];
}

export interface LogResponse {
  success: boolean;
  result: { [key: string]: any };
}
