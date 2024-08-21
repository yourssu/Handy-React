import { createContext } from 'react';

import {
  RadioGroupSizeType,
  RadioGroupOrientationType,
} from '@/components/RadioGroup/RadioGroup.type';

interface RadioGroupContextProps {
  orientation?: RadioGroupOrientationType;
  size?: RadioGroupSizeType;
  currentRadioValue?: string;
}

export const RadioGroupContext = createContext<RadioGroupContextProps>({
  size: undefined,
  orientation: undefined,
  currentRadioValue: undefined,
});
