import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "../../lib/main";

const meta = {
  title: "ui/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    mode: "single",
  },
  render: (args) => <DatePicker {...args} />,
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Range: Story = {
  args: {
    mode: "range",
  },
};
