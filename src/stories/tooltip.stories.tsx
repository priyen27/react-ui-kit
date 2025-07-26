import type { Meta, StoryObj } from "@storybook/react";
import { Plus } from "lucide-react";

import { Tooltip } from "../../lib/main";

/**
 * A popup that displays information related to an element when the element
 * receives keyboard focus or the mouse hovers over it.
 */
const meta: Meta<typeof Tooltip> = {
  title: "ui/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    position: {
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "radio",
      },
    },
    children: {
      control: "text",
    },
  },
  args: {
    position: "top",
    children: "Add to library",
  },
  parameters: {
    layout: "centered",
  },
  render: () => (
    <Tooltip size="large" position="top" message="Add to library">
      <Plus className="h-4 w-4" />
    </Tooltip>
  ),
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the tooltip.
 */
export const Default: Story = {};

/**
 * Use the `bottom` position to display the tooltip below the element.
 */
export const Bottom: Story = {
  args: {
    size: "small",
    position: "bottom",
  },
};

/**
 * Use the `left` position to display the tooltip to the left of the element.
 */
export const Left: Story = {
  args: {
    position: "left",
  },
};

/**
 * Use the `right` position to display the tooltip to the right of the element.
 */
export const Right: Story = {
  args: {
    position: "right",
  },
};
