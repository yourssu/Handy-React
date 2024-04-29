import { TextFieldProps } from '../TextField.type';

export interface SearchTextFieldProps
  extends Omit<
    TextFieldProps,
    'isNegative' | 'isPositive' | 'fieldLabel' | 'helperLabel' | 'suffix' | 'searchPrefix'
  > {
  /** x 버튼을 클릭했을 때 이벤트 핸들러 */
  onClickClearButton?: () => void;
}
