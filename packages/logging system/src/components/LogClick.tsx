import { Children, cloneElement } from 'react';

import { useYLSLogger } from '..';
import { LogPayloadParams } from '../types/LogType';

interface Props {
  children: React.ReactElement;
  params: LogPayloadParams;
}

export const LogClick = ({ children, params }: Props) => {
  const logger = useYLSLogger();
  const child = Children.only(children);

  return cloneElement(child, {
    onClick: (...args: unknown[]) => {
      logger.click({
        ...params,
      });

      if (child.props && typeof child.props['onClick'] === 'function') {
        return child.props.onClick(...args);
      }
    },
  });
};
