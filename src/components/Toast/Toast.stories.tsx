import { Meta, StoryObj } from '@storybook/react';

import { Toast } from './Toast';

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
