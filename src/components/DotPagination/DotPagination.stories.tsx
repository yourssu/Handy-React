import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { DotPagination } from './DotPagination';

const meta: Meta<typeof DotPagination> = {
  title: 'Components/DotPagination',
  component: DotPagination,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    totalPage: {
      description: '전체 페이지 수',
    },
    size: {
      description: '컴포넌트를 사용하는 디바이스 환경',
      control: { type: 'radio', options: ['mobile', 'web'] },
    },
    setPage: {
      description: '현재 페이지를 변경하는 함수',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DotPagination>;

export const Primary: Story = {
  args: {
    totalPage: 5,
  },
};

const DotPaginationTest = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <p>현재 선택된 페이지: {currentPage}</p>
      <br />
      <DotPagination totalPage={5} setPage={setCurrentPage} />
    </>
  );
};
export const Secondary: Story = {
  render: DotPaginationTest,
};

const DotPaginationSizes = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCurrentPage] = useState(1);

  return (
    <div style={{ display: 'flex', gap: '50px' }}>
      <div style={{ textAlign: 'center' }}>
        <p>size='mobile'</p>
        <br />
        <DotPagination totalPage={5} setPage={setCurrentPage} size="mobile" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p>size='web'</p>
        <br />
        <DotPagination totalPage={5} setPage={setCurrentPage} />
      </div>
    </div>
  );
};
export const Sizes: Story = {
  render: DotPaginationSizes,
};

const DotPaginationPage = () => {
  const [totalPage, setTotalPage] = useState<number>(2);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCurrentPage] = useState(1);

  return (
    <>
      <input
        type="number"
        onChange={(e) => setTotalPage(Number(e.target.value))}
        defaultValue={totalPage}
      ></input>
      <br />
      <br />
      <DotPagination totalPage={totalPage} setPage={setCurrentPage} />
    </>
  );
};
export const TotalPage: Story = {
  render: DotPaginationPage,
};
