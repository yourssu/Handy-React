import { Stories, Primary as PrimaryBlock, Controls, Title } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';

import { IcExternalLinkLine } from '@/style';

import { TextButton } from './TextButton';

const meta: Meta<typeof TextButton> = {
  title: 'Atoms/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <PrimaryBlock />
          <Controls />
          <h2> Size에 따른 속성 </h2>
          <h3> medium </h3>
          <span>{'이 옵션을 선택하면 `height = 36`, `typo = B3_Sb_14` 으로 설정됩니다.'}</span>
          <h3> small</h3>
          <span>{'이 옵션을 선택하면 `height = 32`, `typo = B3_Sb_14` 으로 설정됩니다.'}</span>
          <h3> xsmall </h3>
          <span>{'이 옵션을 선택하면 `height = 28`, `typo = B5_Sb_12` 으로 설정됩니다.'}</span>
          <Stories />
        </>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const Primary: Story = {
  args: {
    children: 'Primary/Small',
    size: 'small',
    hierarchy: 'primary',
    disabled: false,
    leftIcon: <IcExternalLinkLine />,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Primary/Disabled/Small',
    size: 'small',
    hierarchy: 'primary',
    disabled: true,
    leftIcon: <IcExternalLinkLine />,
  },
};
