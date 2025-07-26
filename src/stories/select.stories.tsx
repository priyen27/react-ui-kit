import type { Meta, StoryObj } from "@storybook/react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../lib/main";

/**
 * Displays a list of options for the user to pick from—triggered by a button.
 */
const meta: Meta<typeof Select> = {
  title: "ui/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-96">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the select.
 */
export const Default: Story = {};
