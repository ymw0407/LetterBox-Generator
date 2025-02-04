import type { Meta, StoryObj } from "storybook-solidjs";
import { LoadingLottie } from "./loadingLottie";

const meta: Meta<typeof LoadingLottie> = {
  title: "Components/Atom/Lottie/LoadingLottie",
  component: LoadingLottie,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof LoadingLottie>;

export const Example: Story = {
  args: {},
};
