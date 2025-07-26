import ClassTable from "../../lib/components/class-table/page";
import type { Meta, StoryObj } from "@storybook/react";
import "../globals.css";

/**
 * Displays a form input field or a component that looks like an input field.
 */
import type { ComponentType } from "react"; // Import ComponentType from react

const meta = {
  title: "ui/DataTable",
  component: ClassTable as unknown as ComponentType<unknown>, // Cast UltimoTable as ComponentType<any>
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ClassTable>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the input field.
 */
export const Default: Story = {};
