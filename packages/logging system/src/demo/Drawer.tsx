import { useState } from 'react';

import { useLocation } from 'react-router-dom';

import { LogClick } from '../components/LogClick';
import { LogScreen } from '../components/LogScreen';

export const Drawer = () => {
  const [count, setCount] = useState(0);
  const router = useLocation();

  return (
    <>
      <h1>Drawer</h1>
      <div className="card">
        <LogScreen
          params={{
            userId: '',
            version: 1,
            event: {
              name: 'view',
              path: router.pathname,
            },
          }}
        >
          <LogClick
            params={{
              userId: '',
              version: 2,
              event: {
                name: 'click',
                screen: 'drawer',
              },
            }}
          >
            <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          </LogClick>
        </LogScreen>
      </div>
    </>
  );
};
