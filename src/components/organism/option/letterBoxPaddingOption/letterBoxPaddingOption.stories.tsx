import type { Meta, StoryObj } from "storybook-solidjs";
import { LetterBoxPaddingOption } from "./letterBoxPaddingOption";
import { createSignal } from "solid-js";

const meta: Meta<typeof LetterBoxPaddingOption> = {
  title: "Components/Organism/LetterBoxPaddingOption",
  component: LetterBoxPaddingOption,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof LetterBoxPaddingOption>;

const [value, setValue] = createSignal<number>(0);

export const Example: Story = {
  args: {
    getValue: value,
    setValue: setValue,
  },
};
