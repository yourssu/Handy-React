import { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const ControlComponent = (args: object) => {
  return (
    <TextField {...args}>
      <TextField.Label>Label</TextField.Label>
      <TextField.HelperText>Helper Text</TextField.HelperText>
    </TextField>
  );
};

export const Control: StoryObj = {
  render: ControlComponent,
};
