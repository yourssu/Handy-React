import { useState } from 'react';

import { Stories, Primary as PrimaryBlock, Controls, Title } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';

import { SimpleTextField } from './SimpleTextField';

const meta: Meta<typeof SimpleTextField> = {
  title: 'Atoms/TextField/SimpleTextField',
  component: SimpleTextField,
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
            <li>
              TextField의 종류에 따라 suffix, searchPrefix 속성 값이 일부 정해져 있습니다.
              <br />
              <br />
              <table>
                <tr>
                  <th>종류</th>
                  <th>suffix</th>
                  <th>searchPrefix</th>
                </tr>
                <tr>
                  <td>SimpleTextField</td>
                  <td>IcXLine</td>
                  <td>설정 불가</td>
                </tr>
                <tr>
                  <td>SuffixTextField</td>
                  <td>사용자가 설정한 값</td>
                  <td>설정 불가</td>
                </tr>
                <tr>
                  <td>SearchTextField</td>
                  <td>IcXLine</td>
                  <td>IcSearchLine</td>
                </tr>
                <tr>
                  <td>PasswordTextField</td>
                  <td>IcEyeclosedLine 또는 IcEyeopenLine</td>
                  <td>설정 불가</td>
                </tr>
              </table>
            </li>
            <br />
            <li>
              boolean 타입 속성의 우선순위는 아래와 같습니다.
              <br />
              disabled &gt; isNegative &gt; isPositive
            </li>
          </ol>
          <br />
          <Stories />
        </>
      ),
    },
  },
};
export default meta;

const TextFieldStory = ({ ...textFieldProps }) => {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onClickClearButton = () => {
    setValue('');
  };

  const newProps = { ...textFieldProps, value, onChange, onClickClearButton };
  return <SimpleTextField {...newProps} />;
};

type Story = StoryObj<typeof SimpleTextField>;
export const Primary: Story = {
  args: {
    fieldLabel: '필드 라벨',
    helperLabel: '도움말 텍스트',
    placeholder: '플레이스 홀더',
    disabled: false,
    isPositive: false,
    isNegative: false,
    width: '350px',
  },
  render: TextFieldStory,
};

export const Disabled: Story = {
  args: {
    fieldLabel: '필드 라벨',
    helperLabel: '도움말 텍스트',
    placeholder: '플레이스 홀더',
    disabled: true,
    width: '350px',
  },
  render: TextFieldStory,
};

export const Positive: Story = {
  args: {
    fieldLabel: '필드 라벨',
    helperLabel: '도움말 텍스트',
    placeholder: '플레이스 홀더',
    disabled: false,
    isPositive: true,
    width: '350px',
  },
  render: TextFieldStory,
};

export const Negative: Story = {
  args: {
    fieldLabel: '필드 라벨',
    helperLabel: '도움말 텍스트',
    placeholder: '플레이스 홀더',
    disabled: false,
    isNegative: true,
    width: '350px',
  },
  render: TextFieldStory,
};
