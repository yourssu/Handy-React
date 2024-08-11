//handy story template
import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    totalPage: {
      description: '전체 페이지 수',
    },
    initialPage: {
      description: '초기 페이지 번호 (totalPage보다 큰 수)',
    },
    setPage: {
      description: '현재 페이지를 변경하는 함수',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
  args: {
    totalPage: 10,
  },
};

const PaginationTest = ({
  totalPage = 5,
  initialPage = 1,
}: {
  totalPage?: number;
  initialPage?: number;
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  return (
    <div style={{ textAlign: 'center' }}>
      <p>현재 선택된 페이지: {currentPage}</p>
      <br />
      <Pagination totalPage={totalPage} initialPage={currentPage} setPage={setCurrentPage} />
    </div>
  );
};

export const Secondary: Story = {
  render: PaginationTest,
};

export const InitialPage: Story = {
  render: () => <PaginationTest initialPage={8} totalPage={10} />,
};

export const TotalPage: Story = {
  render: () => (
    <div>
      <PaginationTest totalPage={3} />
      <br />
      <br />
      <PaginationTest totalPage={10} />
    </div>
  ),
};
