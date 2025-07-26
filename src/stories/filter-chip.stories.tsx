import type { Meta, StoryObj } from "@storybook/react";

import { FilterChip } from "../../lib/components/filter-chip";

/**
 * Display a Filter Chip with Title and Close Icon
 */
const meta = {
  title: "ui/FilterChip",
  component: FilterChip,
  tags: ["autodocs"],
  argTypes: {},
  render: () => (
    <FilterChip
      title="filter1"
      childKey="test"
      parentKey="parentKey"
      handleCloseClick={(obj) => console.log(obj)}
      handleChipClick={(obj) => console.log(">>> obj", obj)}
    />
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FilterChip>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the dropdown menu.
 */
export const Default: Story = {
  args: {
    title: "filter1",
    childKey: "key",
    parentKey: "parentKey",
    handleCloseClick: () => {},
    handleChipClick: () => {},
  },
};
