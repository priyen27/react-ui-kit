import type { Meta, StoryObj } from "@storybook/react";

import FilterForm from "../../lib/components/FilterForm";

/**
 * Displays a menu to the user — such as a set of actions or functions —
 * triggered by a button.
 */
const meta = {
  title: "ui/Filter",
  component: FilterForm,
  tags: ["autodocs"],
  argTypes: {},
  render: () => <FilterForm defaultValues={{}} />,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FilterForm>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the dropdown menu.
 */
export const Default: Story = {};
