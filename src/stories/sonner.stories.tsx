import type { Meta, StoryObj } from "@storybook/react";

import { Toaster, sonner } from "../../lib/main";

/**
 * An opinionated toast component for React.
 */
const meta: Meta<typeof Toaster> = {
  title: "ui/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    position: "top-center",
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the toaster.
 */
export const Default: Story = {
  render: (args) => (
    <div className="flex min-h-96 items-center justify-center space-x-2">
      <button
        onClick={() =>
          sonner({
            title: "Success",
            description: "Your request was successful!",
            showCloseButton: true,
            type: "success",
          })
        }
      >
        Show Toast
      </button>
      <Toaster {...args} />
    </div>
  ),
};

// story for success, attention and error

export const Success: Story = {
  render: (args) => (
    <div className="flex min-h-96 items-center justify-center space-x-2">
      <button
        onClick={() =>
          sonner({
            title: "Success",
            description: "Your request was successful!",
            showCloseButton: true,
            type: "success",
          })
        }
      >
        Show Success Toast
      </button>
      <Toaster {...args} />
    </div>
  ),
};

export const Attention: Story = {
  render: (args) => (
    <div className="flex min-h-96 items-center justify-center space-x-2">
      <button
        onClick={() =>
          sonner({
            title: "Attention",
            description: "Please check your inputs.",
            showCloseButton: true,
            type: "attention",
          })
        }
      >
        Show Attention Toast
      </button>
      <Toaster {...args} />
    </div>
  ),
};

export const Error: Story = {
  render: (args) => (
    <div className="flex min-h-96 items-center justify-center space-x-2">
      <button
        onClick={() =>
          sonner({
            title: "Error",
            description: "There was a problem with your request.",
            showCloseButton: true,
            type: "error",
          })
        }
      >
        Show Error Toast
      </button>
      <Toaster {...args} />
    </div>
  ),
};
