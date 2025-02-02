import type { Meta, StoryObj } from "storybook-solidjs";
import { SelectImageRectangle } from "./selectImageRectangle";

const meta: Meta<typeof SelectImageRectangle> = {
  title: "Components/Organism/SelectImageRectangle",
  component: SelectImageRectangle,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SelectImageRectangle>;

export const Example: Story = {
  args: {},
};
