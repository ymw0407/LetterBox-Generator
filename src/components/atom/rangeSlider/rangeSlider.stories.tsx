import type { Meta, StoryObj } from "storybook-solidjs";
import { RangeSlider } from "./rangeSlider";
import { createSignal } from "solid-js";

const meta: Meta<typeof RangeSlider> = {
  title: "Components/Atom/RangeSlider",
  component: RangeSlider,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof RangeSlider>;

const [x, setX] = createSignal<number>(0);

export const Example: Story = {
  args: {
    getInput: x,
    setInput: setX,
  },
};
