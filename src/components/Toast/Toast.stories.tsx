import { Stories, Primary as PrimaryBlock, Controls, Title, Markdown } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';

import { useToast } from '@/hooks/useToast';

import HookSource from './HookSource.md?raw';
import { Toast } from './Toast';
import { ToastDuration } from './Toast.type';

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
            <li>Toast의 width는 Toast 를 감싸는 컴포넌트의 width에 영향을 받습니다.</li>
            <li>
              Toast의 위치는 position: relative 속성이 설정된 가장 가까운 부모 컴포넌트에 의해
              결정됩니다.
            </li>
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
    <div style={{ display: 'flex', gap: '10px', width: '780px', height: '300px' }}>
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
      style={{
        backgroundColor: '#c4c4c4',
        width: '1920px',
        height: '1080px',
      }}
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
    children: '줄 수가 두 줄 이상이 되는 토스트 메시지입니다.\n좌측 정렬을 해주세요.',
  },
  render: ToastStory,
};
export const ToastHook: Story = {
  render: HookTest,
};
