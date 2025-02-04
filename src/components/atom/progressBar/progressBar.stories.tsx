import type { Meta, StoryObj } from "storybook-solidjs";
import { ProgressBar } from "./progressBar";
import { createSignal } from "solid-js";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/Atom/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ProgressBar>;

const [getPercent] = createSignal<number>(80);

export const Example: Story = {
  args: {
    borderRadius: "0.5rem",
    getPercent,
  },
};
