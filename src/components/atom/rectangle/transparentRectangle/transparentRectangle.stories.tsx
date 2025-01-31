import type { Meta, StoryObj } from "storybook-solidjs";
import { TransparentRectangle } from "./transparentRectangle";

const meta: Meta<typeof TransparentRectangle> = {
  title: "Components/Atom/Rectangle/TransparentRectangle",
  component: TransparentRectangle,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TransparentRectangle>;

export const Example: Story = {
  args: {},
};
