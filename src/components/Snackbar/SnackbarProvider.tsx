import { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';

import ReactDOM from 'react-dom';

import { Snackbar } from './Snackbar';
import { StyledSnackbarContainer } from './Snackbar.style';
import { SnackbarWithoutClosingProps } from './Snackbar.type';

type SnackbarContextType = {
  showSnackbar: (props: SnackbarWithoutClosingProps) => void;
};

const SnackbarContext = createContext<SnackbarContextType>({ showSnackbar: () => {} });

export const SnackbarProvider = ({ children }: PropsWithChildren) => {
  const [snackbar, setSnackbar] = useState<SnackbarWithoutClosingProps | null>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const showSnackbar = useCallback((props: SnackbarWithoutClosingProps) => {
    setSnackbar(props);
    setIsClosing(false);
  }, []);

  const removeSnackbar = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => setSnackbar(null), 300);
  }, []);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbar &&
        ReactDOM.createPortal(
          <StyledSnackbarContainer
            $width={snackbar.width}
            $position={snackbar.position || 'center'}
          >
            <Snackbar {...snackbar} onClose={removeSnackbar} isClosing={isClosing} />
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
