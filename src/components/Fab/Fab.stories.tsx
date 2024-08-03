import { Meta, StoryObj } from '@storybook/react';

import { IcExternalLinkLine } from '@/style';

import { Fab } from './Fab';

const meta: Meta<typeof Fab> = {
  title: 'Components/Fab',
  component: Fab,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'large'] },
      description: 'Fab의 크기를 결정하는 속성',
    },
    hierarchy: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      description: 'Fab의 시각적 계층 구조를 결정하는 속성',
    },
    disabled: {
      control: 'boolean',
      description: '버튼의 비활성화 여부를 결정하는 속성',
    },
    children: {
      control: 'text',
      description: 'Fab 내부에 보여지는 아이콘',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', height: '100px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Fab>;

export const Default: Story = {
  args: {
    size: 'large',
    hierarchy: 'primary',
    children: <IcExternalLinkLine />,
    disabled: false,
  },
};

export const Sizes: Story = {
  render: () => {
    const fabStyleLarge = {
      position: 'absolute' as const,
      bottom: '32px',
      right: '80px',
    };

    const fabStyleSmall = {
      position: 'absolute' as const,
      bottom: '32px',
      right: '16px',
    };

    return (
      <>
        <Fab size="large" hierarchy="primary" style={fabStyleLarge}>
          <IcExternalLinkLine />
        </Fab>
        <Fab size="small" hierarchy="primary" style={fabStyleSmall}>
          <IcExternalLinkLine />
        </Fab>
      </>
    );
  },
};

export const Hierarchies: Story = {
  render: () => {
    const fabStylePrimary = {
      position: 'absolute' as const,
      bottom: '32px',
      right: '80px',
    };

    const fabStyleSecondary = {
      position: 'absolute' as const,
      bottom: '32px',
      right: '16px',
    };

    return (
      <>
        <Fab size="large" hierarchy="primary" style={fabStylePrimary}>
          <IcExternalLinkLine />
        </Fab>
        <Fab size="large" hierarchy="secondary" style={fabStyleSecondary}>
          <IcExternalLinkLine />
        </Fab>
      </>
    );
  },
};

export const Disabled: Story = {
  args: {
    size: 'large',
    hierarchy: 'primary',
    children: <IcExternalLinkLine />,
    disabled: true,
  },
};
