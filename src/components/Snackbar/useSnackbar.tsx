import { SnackbarWithoutClosingProps } from './Snackbar.type';
import { useSnackbarContext } from './SnackbarProvider';

export const useSnackbar = () => {
  const { showSnackbar } = useSnackbarContext();

  const snackbar = (props: SnackbarWithoutClosingProps) => {
    showSnackbar(props);
  };

  return { snackbar };
};
