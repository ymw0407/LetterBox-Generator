import type { Meta, StoryObj } from "storybook-solidjs";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Atom/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Example: Story = {
  args: {
    text: "generate",
    onClick: () => {
      alert("test");
    },
  },
};
