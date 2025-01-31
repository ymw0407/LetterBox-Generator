import type { Meta, StoryObj } from "storybook-solidjs";
import { SelectImageLottie } from "./selectImageLottie";

const meta: Meta<typeof SelectImageLottie> = {
  title: "Components/Atom/Lottie/SelectImageLottie",
  component: SelectImageLottie,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SelectImageLottie>;

export const Example: Story = {
  args: {},
};
