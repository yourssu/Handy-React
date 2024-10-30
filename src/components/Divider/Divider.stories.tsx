import { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';
import { DividerProps, DividerThickness } from './Divider.type';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: {
      description: 'Divider의 길이를 결정하는 속성',
      table: {
        defaultValue: { summary: '100%' },
      },
    },
    thickness: {
      description: 'Divider의 두께를 결정하는 속성',
      control: {
        type: 'radio',
      },
      options: [1, 2, 4, 8],
      defaultValue: 1,
    },
  },
};

export default meta;
type Story = StoryObj<DividerProps>;

const DividerStory = (args: object) => {
  return (
    <div style={{ width: '390px' }}>
      <Divider thickness={1} {...args} />
    </div>
  );
};

export const Primary: StoryObj = {
  render: DividerStory,
  args: {
    thickness: 1,
  },
};

export const Width: Story = {
  render: () => (
    <div>
      <p> Divider/1px/500px </p>
      <Divider thickness={1} width={500} />
    </div>
  ),
};

export const Thickness: Story = {
  render: () => (
    <div
      style={{
        width: '390px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {[1, 2, 4, 8].map((thickness) => (
        <div key={thickness}>
          <p> Divider/{thickness}px </p>
          <Divider thickness={thickness as DividerThickness} />
        </div>
      ))}
    </div>
  ),
};
