import { Stories, Primary as PrimaryBlock, Controls, Title, Markdown } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';

import { useToast } from '@/hooks/useToast';

import HookSource from './HookSource.md?raw';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Component/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <PrimaryBlock />
          <Controls />
          <h2> 주의사항 </h2>
          <ol>
            <li>width props 값이 fit-content보다 작을 경우 적용되지 않습니다.</li>
          </ol>
          <br />
          <Title>useToast</Title>
          <span>Toast 컴포넌트를 사용하기 위한 Custom Hook입니다.</span>
          <Markdown>{HookSource}</Markdown>
          <br />
          <Stories />
        </>
      ),
    },
  },
};
export default meta;

const ToastStory = ({ ...toastProps }) => {
  return (
    <div
      style={{
        width: '500px',
        height: '150px',
      }}
    >
      <Toast {...toastProps} />
    </div>
  );
};

const HookTest = ({ ...toastProps }) => {
  const { showToast, isShowToast } = useToast();

  return (
    <div
      style={{
        width: '500px',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <button
        onClick={() => {
          showToast(toastProps.duration);
        }}
        style={{ height: 'fit-content' }}
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
    duration: 'short',
    width: '300px',
  },
  render: ToastStory,
};
export const MultiLine: Story = {
  args: {
    children: '줄 수가 두 줄 이상이 되는 토스트 메시지입니다.\n좌측 정렬을 해주세요.',
    duration: 'short',
  },
  render: ToastStory,
};
export const ToastHook: Story = {
  render: HookTest,
  args: {
    children: 'useToast를 사용한 토스트 메시지',
    duration: 'long',
  },
};
