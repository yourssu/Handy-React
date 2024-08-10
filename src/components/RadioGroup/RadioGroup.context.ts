import { createContext } from 'react';

import {
  RadioGroupSizeType,
  RadioGroupOrientationType,
} from '@/components/RadioGroup/RadioGroup.type';

interface RadioGroupContextProps {
  orientation?: RadioGroupOrientationType;
  size?: RadioGroupSizeType;
}

export const RadioGroupContext = createContext<RadioGroupContextProps>({
  size: undefined,
  orientation: undefined,
});
