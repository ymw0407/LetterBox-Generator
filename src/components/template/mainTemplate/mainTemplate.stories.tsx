import type { Meta, StoryObj } from "storybook-solidjs";
import { MainTemplate } from "./mainTemplate";

const meta: Meta<typeof MainTemplate> = {
  title: "Components/Template/MainTemplate",
  component: MainTemplate,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof MainTemplate>;

export const Example: Story = {
  args: {
    title: {
      text: `레터박스 생성기`,
    },
    description: {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
  },
};
