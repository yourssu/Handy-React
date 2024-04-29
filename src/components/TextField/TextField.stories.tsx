import { Controls, Title } from '@storybook/blocks';
import { Meta } from '@storybook/react';

import { TextField } from './TextField';

const meta: Meta = {
  title: 'Atoms/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <h2>주의사항</h2>
          <ol>
            <li>
              TextField의 종류에 따라 suffix, searchPrefix 속성 값이 일부 정해져 있습니다.
              <br />
              <br />
              <table>
                <tbody>
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
                </tbody>
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
          <h2>TextField 속성</h2>
          <Controls />
        </>
      ),
    },
  },
};
export default meta;

const TextFieldStory = () => {};

export const Primary = {
  render: TextFieldStory,
};
