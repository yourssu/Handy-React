import { Children } from 'react';

import { Reorder } from 'framer-motion';

import { StyledChipGroupContainer } from '@/components/ChipGroup/ChipGroup.style';
import { ChipGroupProps } from '@/components/ChipGroup/ChipGroup.type';

export const ChipGroup = <D extends React.ReactNode>({
  children,
  drag = false,
  dragItems = [],
  dragItemSetter = () => {},
}: ChipGroupProps<D>) => {
  if (drag) {
    return (
      <StyledChipGroupContainer>
        <Reorder.Group
          as="div"
          axis="x"
          values={dragItems}
          onReorder={dragItemSetter}
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          {Children.map(children, (child, i) => (
            <Reorder.Item as="div" value={dragItems[i]}>
              {child}
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </StyledChipGroupContainer>
    );
  }

  return <StyledChipGroupContainer>{children}</StyledChipGroupContainer>;
};
