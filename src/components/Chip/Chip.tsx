import {
  StyledChipContainer,
  StyledChipContent,
  StyledChipIconWrapper,
} from '@/components/Chip/Chip.style';
import {
  ChipContentProps,
  ChipIconProps,
  ChipIconRemoveProps,
  ChipProps,
} from '@/components/Chip/Chip.type';
import { IcCloseFilled } from '@/style';

const ChipIcon = ({ children, position, onClick }: ChipIconProps) => {
  return (
    <StyledChipIconWrapper $order={position} onClick={onClick} $clickable={!!onClick}>
      {children}
    </StyledChipIconWrapper>
  );
};

const ChipIconRemove = ({ onClick }: ChipIconRemoveProps) => {
  const onClickWrapper = (e: React.MouseEvent<HTMLElement>) => {
    onClick?.(e);

    const target = e.target as HTMLElement;
    const chip = target.closest('.chip') as HTMLElement;

    if (!chip || chip.dataset.disabled === 'true') return;

    chip.remove();
  };

  return (
    <StyledChipIconWrapper $order="right" className="remove" onClick={onClickWrapper} $clickable>
      <IcCloseFilled />
    </StyledChipIconWrapper>
  );
};

const ChipContent = ({ children }: ChipContentProps) => {
  return <StyledChipContent>{children}</StyledChipContent>;
};

export const Chip = ({ children, role, disabled = false, selected = false }: ChipProps) => {
  return (
    <StyledChipContainer
      className="chip"
      $selected={role === 'input' ? false : selected}
      $disabled={disabled}
      data-disabled={disabled}
    >
      {children}
    </StyledChipContainer>
  );
};

Chip.Icon = ChipIcon;
Chip.Remove = ChipIconRemove;
Chip.Content = ChipContent;
