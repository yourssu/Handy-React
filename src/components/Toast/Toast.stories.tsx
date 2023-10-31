import { Meta, StoryObj } from '@storybook/react';

import { useToast } from '@/hooks/useToast';

import { Toast } from './Toast';
import { ToastDuration } from './Toast.type';

const meta: Meta<typeof Toast> = {
  title: 'Component/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

const ToastStory = ({ ...toastProps }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', width: '780px', height: '644px' }}>
      <div
        style={{
          backgroundColor: '#c4c4c4',
          width: '50%',
          position: 'relative',
        }}
      >
        short duration toast (1.5s)
        <Toast {...toastProps} />
      </div>
      <div
        style={{
          backgroundColor: '#c4c4c4',
          width: '50%',
          position: 'relative',
        }}
      >
        long duration toast (3s)
        <Toast duration="long" {...toastProps} />
      </div>
    </div>
  );
};

const HookTest = () => {
  const toastProps = {
    children: 'useToast를 사용한 토스트 메시지',
    duration: 'long' as ToastDuration,
  };
  const { showToast, isShowToast } = useToast();

  return (
    <div
      style={{ backgroundColor: '#c4c4c4', width: '390px', height: '644px', position: 'relative' }}
    >
      <button
        onClick={() => {
          showToast(toastProps.duration);
        }}
      >
        버튼을 누르면 토스트가 발생합니다
      </button>
      {isShowToast && <Toast {...toastProps} />}
    </div>
  );
};

type Story = StoryObj<typeof Toast>;
export const SingleLine: Story = {
  args: {
    children: '토스트 메시지',
  },
  render: ToastStory,
};
export const MultiLine: Story = {
  args: {
    children: '줄 수가 두 줄 이상이 되는 토스트 메시지입니다. 좌측 정렬을 해주세요.',
  },
  render: ToastStory,
};
export const ToastHook: Story = {
  render: HookTest,
};
