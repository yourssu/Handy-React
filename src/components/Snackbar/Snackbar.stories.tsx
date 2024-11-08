import { Meta, StoryObj } from '@storybook/react';

import { BoxButton } from '@/components/BoxButton';

import { Snackbar } from './Snackbar';
import { SnackbarProps } from './Snackbar.type';
import { SnackbarProvider } from './SnackbarProvider';
import { useSnackbar } from './hooks/useSnackbar';

const meta: Meta<SnackbarProps> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  args: {
    type: 'info',
    duration: 5000,
    margin: '16px',
    position: 'center',
  },
  argTypes: {
    type: {
      description: 'Snackbar의 종류 (info 또는 error)',
      control: { type: 'radio', options: ['info', 'error'] },
    },
    width: {
      control: 'text',
      description: `Snackbar의 가로 길이 (px, rem, em, %, vh, calc())`,
    },
    duration: {
      description: 'Snackbar가 자동으로 닫히기 전까지의 시간 (ms)',
      control: 'number',
    },
    position: {
      description: 'Snackbar의 위치 (left, center, right)',
      control: { type: 'radio', options: ['left', 'center', 'right'] },
    },
    message: {
      control: 'text',
      description: 'Snackbar의 내용 (메시지)',
    },
    onClose: { table: { disable: true } },
    isClosing: { table: { disable: true } },
    heightType: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<SnackbarProps>;

const SnackbarComponent = (args: SnackbarProps) => {
  const { snackbar } = useSnackbar();

  const addSnackbar = () => {
    snackbar({
      ...args,
      message: args.message || '기본 메시지입니다.',
    });
  };

  const buttonLabel = args.type === 'error' ? 'Error Snackbar' : 'Info Snackbar';

  return (
    <div>
      <BoxButton size="small" hierarchy="primary" onClick={addSnackbar}>
        {buttonLabel}
      </BoxButton>
    </div>
  );
};

export const Test: Story = {
  render: (args) => (
    <SnackbarProvider>
      <SnackbarComponent {...args} />
    </SnackbarProvider>
  ),
  args: {
    type: 'info',
    position: 'center',
    width: '350px',
    message: '테스트용 스낵바입니다.',
  },
};

export const Type: Story = {
  render: (args) => (
    <SnackbarProvider>
      <div style={{ display: 'flex', gap: '20px' }}>
        <SnackbarComponent {...args} type="info" message="정보성 메시지가 들어갑니다." />
        <SnackbarComponent {...args} type="error" message="에러 메시지가 들어갑니다." />
      </div>
    </SnackbarProvider>
  ),
  args: {
    width: '350px',
    position: 'center',
  },
};

export const OverflowTest: Story = {
  render: (args) => (
    <SnackbarProvider>
      <h3>두 줄 이상 입력 시</h3>
      <br />
      <div style={{ display: 'flex', gap: '20px' }}>
        <SnackbarComponent {...args} type="info" />
        <SnackbarComponent {...args} type="error" />
      </div>
    </SnackbarProvider>
  ),
  args: {
    message:
      '최대 2줄 입력 가능합니다. 입력 값이 넘칠 시, ellipsis 처리됩니다. 최대 2줄 입력 가능합니다. 입력 값이 넘칠 시, ellipsis 처리됩니다.',
    width: '350px',
    position: 'center',
  },
};
