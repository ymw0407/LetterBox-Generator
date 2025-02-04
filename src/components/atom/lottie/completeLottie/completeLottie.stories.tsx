import type { Meta, StoryObj } from "storybook-solidjs";
import { CompleteLottie } from "./completeLottie";

const meta: Meta<typeof CompleteLottie> = {
  title: "Components/Atom/Lottie/CompleteLottie",
  component: CompleteLottie,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CompleteLottie>;

export const Example: Story = {
  args: {},
};
