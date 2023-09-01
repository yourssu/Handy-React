import { Meta, StoryObj } from "@storybook/react";

import { Test } from "..";

const meta: Meta<typeof Test> = {
    title: "Component/Test",
    component: Test,
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof Test>;

export const Primary: Story = {};
