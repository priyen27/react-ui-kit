import type { Meta, StoryObj } from "@storybook/react";

import { LessonCard } from "../../lib/main";

/**
 * Displays a card with header, content, and footer.
 */
const meta = {
  title: "ui/LessonCard",
  component: LessonCard,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    title: "Priyen",
    id: '1',
    imageSrc: "https://www.w3schools.com/tags/img_girl.jpg",
    providerName: "Senior Frontend Developer",
    type: "grid",
    hasFavorite: false,
    showPreview: true,
    checked: true,
  },
  render: (args) => <LessonCard {...args} />,
} satisfies Meta<typeof LessonCard>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The Grid view of the card.
 */
export const Default: Story = {};

/**
 * The List view of the card.
 */
export const WithListView: Story = {
  args: {
    id: '11',
    type: "list",
    title:
      "New added lesson - All living things that live on this earth comes under the environment. All living things that live on this earth comes under the environment. ",
    hasFavorite: true,
    providerName: "High Resolves Learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim Lorem  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim Lorem  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim Lorem ipsum dolor sit amet, consectetur.",
    showPreview: true,
  },
};
