import { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';

import ReactDOM from 'react-dom';

import { Snackbar } from './Snackbar';
import { StyledSnackbarContainer } from './Snackbar.style';
import { SnackbarProps } from './Snackbar.type';

type SnackbarContextType = {
  showSnackbar: (props: Omit<SnackbarProps, 'isClosing' | 'id'>) => void;
};

const SnackbarContext = createContext<SnackbarContextType>({ showSnackbar: () => {} });

export const SnackbarProvider = ({ children }: PropsWithChildren) => {
  const [snackbars, setSnackbars] = useState<SnackbarProps[]>([]);
  const MAX_SNACKBARS = 5;

  const showSnackbar = useCallback((props: Omit<SnackbarProps, 'isClosing' | 'id'>) => {
    setSnackbars((prevSnackbars) => {
      if (prevSnackbars.length >= MAX_SNACKBARS) {
        return prevSnackbars;
      }
      const newSnackbar = { ...props, id: `snackbar-${Date.now()}`, isClosing: false };
      return [...prevSnackbars, newSnackbar];
    });
  }, []);

  const handleRemoveSnackbar = useCallback((id: string) => {
    setSnackbars((prevSnackbars) => prevSnackbars.filter((snackbar) => snackbar.id !== id));
  }, []);

  const snackbarList = snackbars.map((snackbar) => (
    <Snackbar
      key={snackbar.id}
      id={snackbar.id}
      type={snackbar.type}
      width={snackbar.width}
      margin={snackbar.margin}
      message={snackbar.message}
      onClose={handleRemoveSnackbar}
      duration={snackbar.duration}
      position={snackbar.position}
      isClosing={snackbar.isClosing}
    />
  ));

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {ReactDOM.createPortal(
        <StyledSnackbarContainer position={snackbars[0]?.position || 'center'}>
          {snackbarList}
        </StyledSnackbarContainer>,
        document.body
      )}
    </SnackbarContext.Provider>
  );
};

export const useSnackbarContext = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};
