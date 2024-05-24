import { YDSProviderProps, YDSProvider } from '@/contexts/YDSProvider';
import { GlobalStyles } from '@/style';

export type YDSWrapperProps = {
  children?: React.ReactNode;
} & YDSProviderProps;

/**
 * YDS에 사용되는 Context, Style을 위한 컴포넌트입니다.
 * YDS를 사용하는 프로젝트의 최상위 컴포넌트로 사용해야 합니다.
 */
export const YDSWrapper = ({ children }: YDSWrapperProps) => {
  return (
    <>
      <GlobalStyles />
      <YDSProvider>{children}</YDSProvider>
    </>
  );
};
