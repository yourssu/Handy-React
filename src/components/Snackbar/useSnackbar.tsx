import { SnackbarProps } from './Snackbar.type';
import { useSnackbarContext } from './SnackbarProvider';

export const useSnackbar = () => {
  const { showSnackbar } = useSnackbarContext();

  const snackbar = (props: Omit<SnackbarProps, 'isClosing' | 'id'>) => {
    showSnackbar(props);
  };

  return { snackbar };
};
